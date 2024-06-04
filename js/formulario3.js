//Contato com águas da enchente

document.addEventListener('DOMContentLoaded', function() {
    const contatoEnchenteSim = document.getElementById('contatoEnchenteSim');
    const contatoEnchenteNao = document.getElementById('contatoEnchenteNao');
    const feridasExpostasSim = document.getElementById('feridasExpostasSim');
    const feridasExpostasNao = document.getElementById('feridasExpostasNao');

    function toggleFeridasExpostas(enabled) {
        feridasExpostasSim.disabled = !enabled;
        feridasExpostasNao.disabled = !enabled;
    }

    contatoEnchenteSim.addEventListener('change', function() {
        if (this.checked) {
            toggleFeridasExpostas(true);
        }
    });

    contatoEnchenteNao.addEventListener('change', function() {
        if (this.checked) {
            toggleFeridasExpostas(false);
            feridasExpostasSim.checked = false;
            feridasExpostasNao.checked = false;
        }
    });
});

//Febre

document.addEventListener('DOMContentLoaded', function() {
    const febreSim = document.getElementById('febreSim');
    const febreNao = document.getElementById('febreNao');
    const temperaturaMaxima = document.getElementById('temperaturaMaxima');
    const calafriosSim = document.getElementById('calafriosSim');
    const calafriosNao = document.getElementById('calafriosNao');

    function toggleFebreFields(enabled) {
        temperaturaMaxima.disabled = !enabled;
        calafriosSim.disabled = !enabled;
        calafriosNao.disabled = !enabled;

        if (!enabled) {
            temperaturaMaxima.value = '';
            calafriosSim.checked = false;
            calafriosNao.checked = false;
        }
    }

    febreSim.addEventListener('change', function() {
        if (this.checked) {
            toggleFebreFields(true);
        }
    });

    febreNao.addEventListener('change', function() {
        if (this.checked) {
            toggleFebreFields(false);
        }
    });

    temperaturaMaxima.addEventListener('input', function() {
        let value = this.value.replace(/[^\d]/g, ''); 

        if (value.length > 3) {
            value = value.substring(0, 3); 
        }

        if (value.length === 3) {
            value = value.slice(0, 2) + ',' + value.slice(2);
        }

        this.value = value;
    });

    temperaturaMaxima.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' || event.key === 'Delete') {
            let value = this.value.replace(',', ''); 

            if (value.length === 3) {
                value = value.slice(0, 2); 
            } else if (value.length === 2) {
                value = value.slice(0, 1); 
            } else if (value.length === 1) {
                value = ''; 
            }

            this.value = value;
        }
    });
});

//Dores musculares
document.addEventListener('DOMContentLoaded', function() {
    const doresSim = document.getElementById('doresSim');
    const doresNao = document.getElementById('doresNao');
    const bodyPartsCheckboxes = document.querySelectorAll('#bodyParts input[type="checkbox"]');
    const outraDor = document.getElementById('outraDor');

    function toggleBodyParts(enabled) {
        bodyPartsCheckboxes.forEach(checkbox => {
            checkbox.disabled = !enabled;
            if (!enabled) {
                checkbox.checked = false;
            }
        });
        outraDor.disabled = !enabled;
        if (!enabled) {
            outraDor.value = '';
        }
    }

    doresSim.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(true);
        }
    });

    doresNao.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(false);
        }
    });

    if (doresSim.checked) {
        toggleBodyParts(true);
    } else {
        toggleBodyParts(false);
    }
});

//Dor de cabeça
document.addEventListener('DOMContentLoaded', function() {
    const doresSim = document.getElementById('doresSim');
    const doresNao = document.getElementById('doresNao');
    const bodyPartsCheckboxes = document.querySelectorAll('#bodyParts input[type="checkbox"]');
    const outraDor = document.getElementById('outraDor');
    const dorCabecaSim = document.getElementById('dorCabecaSim');
    const dorCabecaNao = document.getElementById('dorCabecaNao');
    const dorCabecaDetails = document.getElementById('dorCabecaDetails');
    const intensidadeDorRadios = document.querySelectorAll('input[name="intensidadeDor"]');
    const localDorRadios = document.querySelectorAll('input[name="localDor"]');
    const frequenciaDorRadios = document.querySelectorAll('input[name="frequenciaDor"]');

    function toggleBodyParts(enabled) {
        bodyPartsCheckboxes.forEach(checkbox => {
            checkbox.disabled = !enabled;
            if (!enabled) {
                checkbox.checked = false;
            }
        });
        outraDor.disabled = !enabled;
        if (!enabled) {
            outraDor.value = '';
        }
    }

    function toggleDorCabecaDetails(enabled) {
        dorCabecaDetails.classList.toggle('d-none', !enabled);
        intensidadeDorRadios.forEach(radio => radio.disabled = !enabled);
        localDorRadios.forEach(radio => radio.disabled = !enabled);
        frequenciaDorRadios.forEach(radio => radio.disabled = !enabled);

        if (!enabled) {
            intensidadeDorRadios.forEach(radio => radio.checked = false);
            localDorRadios.forEach(radio => radio.checked = false);
            frequenciaDorRadios.forEach(radio => radio.checked = false);
        }
    }

    doresSim.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(true);
        }
    });

    doresNao.addEventListener('change', function() {
        if (this.checked) {
            toggleBodyParts(false);
        }
    });

    dorCabecaSim.addEventListener('change', function() {
        if (this.checked) {
            toggleDorCabecaDetails(true);
        }
    });

    dorCabecaNao.addEventListener('change', function() {
        if (this.checked) {
            toggleDorCabecaDetails(false);
        }
    });

    if (doresSim.checked) {
        toggleBodyParts(true);
    } else {
        toggleBodyParts(false);
    }

    if (dorCabecaSim.checked) {
        toggleDorCabecaDetails(true);
    } else {
        toggleDorCabecaDetails(false);
    }
});

//Problemas gastrointestinais
document.addEventListener('DOMContentLoaded', function() {
    const nauseaVomitoSim = document.getElementById('nauseaVomitoSim');
    const nauseaVomitoNao = document.getElementById('nauseaVomitoNao');
    const diarreiaSim = document.getElementById('diarreiaSim');
    const diarreiaNao = document.getElementById('diarreiaNao');
    const frequenciaDiarreia = document.getElementById('frequenciaDiarreia');
    const frequenciaDiarreiaRadios = document.querySelectorAll('input[name="frequenciaDiarreiaOp"]');

    function toggleFrequenciaDiarreia(enabled) {
        frequenciaDiarreia.classList.toggle('d-none', !enabled);
        frequenciaDiarreiaRadios.forEach(radio => radio.disabled = !enabled);

        if (!enabled) {
            frequenciaDiarreiaRadios.forEach(radio => radio.checked = false);
        }
    }

    function checkGastrointestinalProblems() {
        if (nauseaVomitoSim.checked || diarreiaSim.checked) {
            toggleFrequenciaDiarreia(true);
        } else {
            toggleFrequenciaDiarreia(false);
        }
    }

    nauseaVomitoSim.addEventListener('change', checkGastrointestinalProblems);
    nauseaVomitoNao.addEventListener('change', checkGastrointestinalProblems);
    diarreiaSim.addEventListener('change', checkGastrointestinalProblems);
    diarreiaNao.addEventListener('change', checkGastrointestinalProblems);

    checkGastrointestinalProblems();
});





