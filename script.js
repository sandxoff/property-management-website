document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home');
    const portfolioLink = document.getElementById('portfolio');
    const tradeLink = document.getElementById('trade');
    const leaderboardLink = document.getElementById('leaderboard');
    const learnLink = document.getElementById('learn');

    const homeSection = document.getElementById('home-section');
    const portfolioSection = document.getElementById('portfolio-section');
    const tradeSection = document.getElementById('trade-section');
    const leaderboardSection = document.getElementById('leaderboard-section');
    const learnSection = document.getElementById('learn-section');

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(homeSection);
    });

    portfolioLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(portfolioSection);
    });

    tradeLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(tradeSection);
    });

    leaderboardLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(leaderboardSection);
    });

    learnLink.addEventListener('click', function(e) {
        e.preventDefault();
        showSection(learnSection);
    });

    function showSection(section) {
        const sections = [homeSection, portfolioSection, tradeSection, leaderboardSection, learnSection];
        sections.forEach(sec => {
            sec.classList.add('hidden');
        });
        section.classList.remove('hidden');
    }
});
