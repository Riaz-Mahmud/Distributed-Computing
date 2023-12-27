<script>
    $(document).ready(function () {
        
        function fetchProjects() {
            $.ajax({
                url: 'http://localhost:3000/api/projects',
                method: 'GET',
                success: function (data) {
                    // Display projects on page
                    const projectList = $('#projects-list');
                    projectList.empty();
                    data.data.forEach(project => {
                        projectList.append(`
                            <div class="col-md-3 mb-3">
                                <div class="card">
                                    <img src="http://localhost:3000/${project.image}" class="card-img-top img-fluid" alt="..." style="height: 100px; width: 100%; object-fit: cover;">
                                    <div class="card-body p-2">
                                        <h5 class="card-title" style="font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${project.name}</h5>
                                        <p class="card-text" style="font-size: 12px; overflow: hidden; margin: 0"><b>Tech Stack:</b> ${project.techstack} </p>
                                        <p class="card-text description" style="font-size: 12px; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; line-height: 1.5em; max-height: 3em; ">
                                            <b>Desc:</b> ${project.description}
                                        </p>
                                        <p class="card-text" style="font-size: 12px; overflow: hidden;"> <b>Link:</b> ${project.link}</p>

                                        <div class="col-md-12">
                                            <button type="button" class="btn btn-primary btn-sm editProject" data-toggle="modal" data-target="#EditProjectModal" data-id="${project._id}" data-name="${project.name}" data-techstack="${project.techstack}" data-description="${project.description}" data-link="${project.link}">
                                                Edit
                                            </button>
                                            <button type="button" class="btn btn-danger btn-sm deleteProject" data-toggle="modal" data-target="#deleteProject" data-project-id="${project._id}">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `);
                            
                    });
                },
                error: function (error) {
                    console.error('Error fetching projects:', error.responseText);
                }
            });
        }

        // Edit
        $('.projects-list').on('click', '.editProject', function () {
            event.preventDefault();
            const editProjectBtn = event.target.closest('.editProject');
            if (!editProjectBtn) return;
            const id = editProjectBtn.dataset.id;
            console.log(id);
            const name = editProjectBtn.dataset.name;
            const techstack = editProjectBtn.dataset.techstack;
            const description = editProjectBtn.dataset.description;
            const link = editProjectBtn.dataset.link;

            $('#editProjectId').val(id);
            $('#editProjectName').val(name);
            $('#editProjectTechStack').val(techstack);
            $('#editProjectDescription').val(description);
            $('#editProjectLink').val(link);
        });
        

        // delete
        $('.projects-list').on('click', '.deleteProject', function () {
            event.preventDefault();
            const deleteProjectBtn = event.target.closest('.deleteProject');
            if (!deleteProjectBtn) return;
            const id = deleteProjectBtn.dataset.projectId;

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        url: `http://localhost:3000/api/projects/${id}`,
                        method: 'DELETE',
                        success: function (data) {
                            // project deleted successfully, fetch and display updated project
                            fetchProjects();
                            $message = data.message;
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: $message,
                                timer: 2000
                            });
                        },
                        error: function (error) {
                            console.error('Error deleting project:', error.responseText);
                            $message = error.responseJSON.message;
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: $message
                            });
                        }
                    });
                }
            });
        });

        // Event listener for the form submission
        $('#addProjectForm').submit(function (event) {
            event.preventDefault();

            const formData = new FormData(this);

            // Make a POST request to add a new project
            $.ajax({
                url: 'http://localhost:3000/api/projects',
                type: 'POST',
                processData: false,
                contentType: false,
                data: formData,
                success: function (data) {
                    $('#addProjectModal').modal('hide');
                    $('.modal-backdrop').remove();
                    // project added successfully, fetch and display updated project
                    fetchProjects();

                    $message = data.message;
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: $message,
                        timer: 2000
                    });
                },
                error: function (error) {
                    console.error('Error adding project:', error.responseText);
                    $message = error.responseJSON.message;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: $message
                    });
                }
            });
        });

        // Event listener for the form submission
        $('#editProjectForm').submit(function (event) {
            event.preventDefault();

            const formData = new FormData(this);
            const id = $('#editProjectId').val();
            console.log(id);

            // Make a PUT request to update a project
            $.ajax({
                url: `http://localhost:3000/api/projects/${id}`,
                type: 'PUT',
                processData: false,
                contentType: false,
                data: formData,
                success: function (data) {
                    $('#EditProjectModal').modal('hide');
                    $('.modal-backdrop').remove();
                    // project updated successfully, fetch and display updated project
                    fetchProjects();

                    $message = data.message;
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: $message,
                        timer: 2000
                    });
                },
                error: function (error) {
                    console.error('Error updating project:', error.responseText);
                    $message = error.responseJSON.message;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: $message
                    });
                }
            });
        });


        fetchProjects();
    });
</script>