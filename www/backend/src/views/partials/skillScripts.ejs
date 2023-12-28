<script>
    $(document).ready(function () {
        
        function fetchSkills() {
            $.ajax({
                url: 'http://localhost:3000/api/skills',
                method: 'GET',
                success: function (data) {
                    console.log(data);
                    // Display projects on page
                    const skillList = $('#skills-list');
                    skillList.empty();
                    data.data.forEach(skill => {
                        skillList.append(`
                        <div class="col-md-2 mb-3">
                            <div class="card">
                                <div class="card-body p-2">
                                    <h5 class="card-title" style="font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${skill.name}</h5>
                                    <p class="card-text description" style="font-size: 12px; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; height: 3em; line-height: 1.5em; max-height: 3em; ">
                                        ${skill.description}
                                    </p>
                                    <div class="col-md-12">
                                        <button type="button" class="btn btn-primary btn-sm editSkill" data-toggle="modal" data-target="#EditSkillModal" data-id="${skill._id}" data-name="${skill.name}" data-description="${skill.description}">
                                            Edit
                                        </button>
                                        <button type="button" class="btn btn-danger btn-sm deleteSkill" data-toggle="modal" data-target="#deleteSkill" data-skill-id="${skill._id}">
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

        $('.skills-list').on('click', '.deleteSkill', function () {
            event.preventDefault();
            const deleteSkillBtn = event.target.closest('.deleteSkill');
            if (!deleteSkillBtn) return;
            const id = deleteSkillBtn.dataset.skillId;
            console.log(id);

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
                        url: `http://localhost:3000/api/skills/${id}`,
                        type: 'DELETE',
                        success: function (data) {
                            // Skill deleted successfully, fetch and display updated Skill
                            fetchSkills();

                            $message = data.message;
                            Swal.fire({
                                icon: 'success',
                                title: 'Success!',
                                text: $message,
                                timer: 2000
                            })
                        },
                        error: function (error) {
                            $message = error.responseJSON.message;

                            console.error('Error deleting Skill:', error.responseText);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: $message,
                            })
                        }
                    });
                }
            })
        });

        $('.skills-list').on('click', '.editSkill', function () {
            event.preventDefault();
            const editSkillBtn = event.target.closest('.editSkill');
            if (!editSkillBtn) return;
            const id = editSkillBtn.dataset.id;
            console.log(id);
            const name = editSkillBtn.dataset.name;
            const description = editSkillBtn.dataset.description;

            $('#editSkill').modal('show');
            $('#skillId').val(id);
            $('#editName').val(name);
            $('#editDescription').val(description);
        });

        // Event listener for the form submission
        $('#addSkillForm').submit(function (event) {
            event.preventDefault();

            const name = $('#name').val();
            const description = $('#description').val();

            // Make a POST request to add a new project
            $.ajax({
                url: 'http://localhost:3000/api/skills',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ name, description}),
                success: function (data) {
                    // hide modal
                    $('#addSkillModal').modal('hide');
                    $('.modal-backdrop').remove();
                    // Skill added successfully, fetch and display updated Skill
                    fetchSkills();

                    $message = data.message;
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: $message,
                        timer: 2000
                    })
                },
                error: function (error) {
                    $message = error.responseJSON.message;

                    console.error('Error adding project:', error.responseText);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: $message,
                    })
                }
            });
        });

        // Event listener for the form submission
        $('#editSkillForm').submit(function (event) {
            console.log('editSkillForm');
            event.preventDefault();

            const id = $('#skillId').val();
            const name = $('#editName').val();
            const description = $('#editDescription').val();

            // Make a PUT request to update a project
            $.ajax({
                url: `http://localhost:3000/api/skills/${id}`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({ name, description }),
                success: function (data) {
                    // hide modal
                    $('#EditSkillModal').modal('hide');
                    $('.modal-backdrop').remove();
                    // Skill updated successfully, fetch and display updated Skill
                    fetchSkills();

                    $message = data.message;
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: $message,
                        timer: 2000
                    })
                },
                error: function (error) {
                    $message = error.responseJSON.message;

                    console.error('Error updating Skill:', error.responseText);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: $message,
                    })
                }
            });
        });


        fetchSkills();
    });
</script>