<?php
    $title = "Skills | Admin Dashboard";
    include_once '../admin/includes/header.php';
?>

<body>

    <?php
        include_once '../admin/includes/sidebar.php';
    ?>

    <div class="content">
        <div class="container">
            <div class="row mt-3">
                <!-- title -->
                <h2>Skills</h2>

                <div class="col-md-12 text-right" style="margin-bottom: 10px;">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addSkillModal">
                        Add Skill
                    </button>
                </div>
            </div>
            <div class="row skills-list" id="skills-list"></div>
        </div>
    </div>

    <div class="modal fade" id="addSkillModal" tabindex="-1" role="dialog" aria-labelledby="addSkillModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addSkillModalLabel">Add Skill</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="addSkillForm" method="POST" action="http://localhost:3000/api/skills">
                    <div class="modal-body">
                        <!-- Form to add a new Skill -->
                        <div class="form-group">
                            <label for="skillName">Skill Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="skillDescription">Skill Description</label>
                            <textarea class="form-control" id="description" name="description" required></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- edit skill modal -->
    <div class="modal fade" id="EditSkillModal" tabindex="-1" role="dialog" aria-labelledby="EditSkillModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <!-- Form to edit a Skill -->
                <form id="editSkillForm">
                    <div class="modal-header">
                        <h5 class="modal-title" id="EditSkillModalLabel">Edit Skill</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input id="skillId" name="skillId" type="hidden" value="">
                        <div class="form-group">
                            <label for="skillName">Skill Name</label>
                            <input type="text" class="form-control" id="editName" name="editName" required>
                        </div>
                        <div class="form-group">
                            <label for="skillDescription">Skill Description</label>
                            <textarea class="form-control" id="editDescription" name="editDescription" required></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <?php
        include_once '../admin/includes/scripts.php';
        include_once '../admin/includes/skillScripts.php';
    ?>

</body>

<?php
    include_once '../admin/includes/footer.php';
?>