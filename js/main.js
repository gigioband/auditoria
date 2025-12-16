// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize first accordion as open
    const firstAccordion = document.querySelector('.accordion-item');
    if (firstAccordion) {
        firstAccordion.classList.add('active');
    }

    // Accordion toggle
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all accordions
            document.querySelectorAll('.accordion-item').forEach(acc => {
                acc.classList.remove('active');
            });
            
            // Toggle clicked accordion
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Smooth scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.ranking-card, .chart-card, .issue-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Initialize Charts
    initCharts();
});

function initCharts() {
    // Chart 1: Distribuição de Divergências
    const divergenciasCtx = document.getElementById('divergenciasChart');
    if (divergenciasCtx) {
        new Chart(divergenciasCtx, {
            type: 'doughnut',
            data: {
                labels: ['T→P (Atualização Normal)', 'P→T (Crítico)', 'Outros (P→R, T→R)'],
                datasets: [{
                    data: [371, 80, 8],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ],
                    borderColor: [
                        'rgb(16, 185, 129)',
                        'rgb(239, 68, 68)',
                        'rgb(245, 158, 11)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12,
                                family: 'Inter'
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            family: 'Inter'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Inter'
                        },
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: ${value} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Chart 2: Cobertura de Imagens por Bairro
    const imagensCtx = document.getElementById('imagensChart');
    if (imagensCtx) {
        new Chart(imagensCtx, {
            type: 'bar',
            data: {
                labels: ['Arquipélago\ndo Sol', 'Recanto', 'Altavistta', 'Barra\nMar', 'Praia\nBonita'],
                datasets: [{
                    label: 'Cobertura de Imagens (%)',
                    data: [99.3, 95.8, 79.8, 74.0, 42.6],
                    backgroundColor: [
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(239, 68, 68, 0.8)'
                    ],
                    borderColor: [
                        'rgb(16, 185, 129)',
                        'rgb(59, 130, 246)',
                        'rgb(139, 92, 246)',
                        'rgb(245, 158, 11)',
                        'rgb(239, 68, 68)'
                    ],
                    borderWidth: 2,
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            family: 'Inter'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Inter'
                        },
                        callbacks: {
                            label: function(context) {
                                return `Cobertura: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            },
                            font: {
                                size: 11,
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 11,
                                family: 'Inter'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Chart 3: Comparativo de Consistência
    const consistenciaCtx = document.getElementById('consistenciaChart');
    if (consistenciaCtx) {
        new Chart(consistenciaCtx, {
            type: 'bar',
            data: {
                labels: ['Arquipélago\ndo Sol', 'Praia\nBonita', 'Barra\nMar', 'Altavistta', 'Recanto'],
                datasets: [
                    {
                        label: 'Tipos Iguais (OK)',
                        data: [320, 224, 1754, 549, 153],
                        backgroundColor: 'rgba(16, 185, 129, 0.8)',
                        borderColor: 'rgb(16, 185, 129)',
                        borderWidth: 2,
                        borderRadius: 6
                    },
                    {
                        label: 'Atualizações T→P (Normal)',
                        data: [64, 11, 214, 60, 22],
                        backgroundColor: 'rgba(59, 130, 246, 0.8)',
                        borderColor: 'rgb(59, 130, 246)',
                        borderWidth: 2,
                        borderRadius: 6
                    },
                    {
                        label: 'Regressões P→T (Crítico)',
                        data: [2, 3, 52, 21, 2],
                        backgroundColor: 'rgba(239, 68, 68, 0.8)',
                        borderColor: 'rgb(239, 68, 68)',
                        borderWidth: 2,
                        borderRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12,
                                family: 'Inter'
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            family: 'Inter'
                        },
                        bodyFont: {
                            size: 13,
                            family: 'Inter'
                        },
                        callbacks: {
                            label: function(context) {
                                const label = context.dataset.label || '';
                                const value = context.parsed.y;
                                return `${label}: ${value} registros`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 11,
                                family: 'Inter'
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        stacked: true,
                        ticks: {
                            font: {
                                size: 11,
                                family: 'Inter'
                            }
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// Counter animation for metrics
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize counter animations when metrics are in viewport
const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const valueElement = entry.target.querySelector('.metric-value');
            const scoreElement = entry.target.querySelector('.score-value');
            
            if (valueElement) {
                const text = valueElement.textContent.trim();
                const match = text.match(/[\d,]+/);
                if (match) {
                    const number = parseInt(match[0].replace(/,/g, ''));
                    if (!isNaN(number) && !text.includes('%')) {
                        valueElement.textContent = '0';
                        animateCounter(valueElement, number);
                    }
                }
            }
            
            if (scoreElement) {
                const text = scoreElement.textContent.trim();
                const match = text.match(/[\d.]+/);
                if (match) {
                    const number = parseFloat(match[0]);
                    if (!isNaN(number)) {
                        scoreElement.textContent = '0%';
                        let current = 0;
                        const increment = number / 100;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= number) {
                                scoreElement.textContent = number + '%';
                                clearInterval(timer);
                            } else {
                                scoreElement.textContent = current.toFixed(1) + '%';
                            }
                        }, 16);
                    }
                }
            }
        }
    });
}, { threshold: 0.5 });

// Observe metric cards
document.querySelectorAll('.metric-card, .ranking-card').forEach(card => {
    metricObserver.observe(card);
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Print statistics to console
console.log('%c📊 Auditoria KALANA vs PLANURBI', 'font-size: 20px; color: #3b82f6; font-weight: bold;');
console.log('%c✅ Taxa de Consistência: 97,2%', 'font-size: 14px; color: #10b981;');
console.log('%c📍 Total de Registros: 3.468', 'font-size: 14px; color: #3b82f6;');
console.log('%c⚠️  Regressões Críticas: 80', 'font-size: 14px; color: #ef4444;');
console.log('%c📸 Cobertura de Imagens: 77%', 'font-size: 14px; color: #8b5cf6;');