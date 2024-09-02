document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseover', function() {
            const previewUrl = project.getAttribute('data-preview');
            const previewFrame = document.createElement('iframe');
            previewFrame.src = previewUrl;
            previewFrame.style.width = '100%';
            previewFrame.style.height = '200px';
            project.appendChild(previewFrame);
        });

        project.addEventListener('mouseout', function() {
            const previewFrame = project.querySelector('iframe');
            if (previewFrame) {
                project.removeChild(previewFrame);
            }
        });
    });
});
