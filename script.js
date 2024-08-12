// script.js

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project-card');

    const revealProjects = () => {
        const windowHeight = window.innerHeight;
        
        projects.forEach((project) => {
            const rect = project.getBoundingClientRect();
            if (rect.top <= windowHeight - 100 && rect.bottom >= 0) {
                // Adiciona a classe para animar o projeto
                project.classList.add('visible');
            }
        });
    };

    // Verifica se os projetos estão na visão ao carregar a página
    revealProjects();

    // Adiciona um ouvinte de evento para rolagem
    window.addEventListener('scroll', revealProjects);
});
