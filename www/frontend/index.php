<?php
    $title = 'Home';
    include_once 'includes/header.php'
?>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="justify-content: space-between; padding-left: 10%; padding-right: 10%;">
        <a class="navbar-brand" href="/">
            <img src="images/icon.png" width="30" height="30" class="d-inline-block align-top" alt="icon">
            <span class="ml-2">Portfolio</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="d-flex">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    </nav>

    <section id="skills">
        <div class="container">
            <div class="row mt-3">
                <!-- title -->
                <h3>Skills</h3>
            </div>
            <div class="row skills-list" id="skills-list"></div>
        </div>
    </section>

    <section id="projects">
        <div class="container">
            <div  class="row mt-3">
                <!-- title -->
                <h3>Projects</h3>
            </div>
            <div class="row projects-list" id="projects-list"></div>
        </div>
    </section>

    

    <?php
        include_once 'includes/script.php'
    ?>
    
</body>

<?php
    include_once 'includes/footer.php'
?>