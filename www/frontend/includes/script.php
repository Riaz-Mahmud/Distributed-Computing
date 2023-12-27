<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

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
        
        function fetchProjects() {
            $.ajax({
                url: 'http://localhost:3000/api/projects',
                method: 'GET',
                success: function (data) {
                    console.log(data);
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
                                        <p class="card-text" style="font-size: 12px; margin: 0" ><b>Tech Stack:</b> ${project.techstack}</p>
                                        <p class="card-text description" style="font-size: 12px; overflow: hidden; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; display: -webkit-box; line-height: 1.5em; max-height: 3em; ">
                                            <b>Desc:</b> ${project.description}
                                        </p>
                                        <a href="${project.link}" target="_blank" class="btn btn-primary btn-sm" style="width: 100%;">Demo</a>
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

        fetchSkills();
        fetchProjects();
    });
</script>