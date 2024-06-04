//Doenças crônicas (outro)
document.addEventListener('DOMContentLoaded', function() {
    const outro = document.getElementById('outro');
    const especifique = document.getElementById('especifique');

    function toggleTextInput() {
        if (outro.checked) {
            especifique.disabled = false; 
        } else {
            especifique.disabled = true; 
            especifique.value = ''; 
        }
    }

    outro.addEventListener('change', toggleTextInput);

    toggleTextInput(); 

});


//Alergias
document.addEventListener('DOMContentLoaded', function() {
    const temAlergia = document.getElementById('temAlergia');
    const naoTemAlergia = document.getElementById('naoTemAlergia');
    const alergiaTextarea = document.getElementById('alergiaTextarea');

    function toggleTextarea() {
        if (naoTemAlergia.checked) {
            alergiaTextarea.disabled = true;
            alergiaTextarea.value = ''; // Limpa text area
        } else {
            alergiaTextarea.disabled = false;
        }
    }

    temAlergia.addEventListener('change', toggleTextarea);
    naoTemAlergia.addEventListener('change', toggleTextarea);

    toggleTextarea();
});

document.addEventListener('DOMContentLoaded', function() {
    setupMedicamentosSection();
    setupCirurgiasSection();
    setupInternacoesSection();
});

function setupMedicamentosSection() {
    const containerMedicamentos = document.getElementById('containerMedicamentos');
    const botaoAdicionaMedicamento = document.getElementById('botaoAdicionaMedicamento');
    let contaMedicamentos = 0;
    const maxMedicamentos = 10;

    botaoAdicionaMedicamento.addEventListener('click', function() {
        if (contaMedicamentos < maxMedicamentos) {
            contaMedicamentos++;
            const medicamentosDiv = document.createElement('div');
            medicamentosDiv.classList.add('row', 'gx-5', 'mb-3', 'align-items-end');
            medicamentosDiv.id = `medicamento${contaMedicamentos}`;

            medicamentosDiv.innerHTML = `
                <div class="col-md-3">
                    <label for="nomeMedicamento${contaMedicamentos}" class="form-label">Nome do medicamento</label>
                    <input type="text" class="form-control" id="nomeMedicamento${contaMedicamentos}" placeholder="Nome">
                </div>
                <div class="col-md-3">
                    <label for="dosagem${contaMedicamentos}" class="form-label">Dosagem</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="dosagem${contaMedicamentos}" placeholder="Dosagem">
                        <select class="form-select" id="unidadeDosagem${contaMedicamentos}">
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                            <option value="mL">mL</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="frequencia${contaMedicamentos}" class="form-label">Frequência</label>
                    <select class="form-select" id="frequencia${contaMedicamentos}">
                        <option value="1x ao dia">1x ao dia</option>
                        <option value="2x ao dia">2x ao dia</option>
                        <option value="3x ao dia">3x ao dia</option>
                        <option value="4x ao dia">4x ao dia</option>
                    </select>
                </div>
                <div class="col-md-3 d-flex align-items-center">
                    <button type="button" class="btn btn-danger" onclick="removeMedicamento(${contaMedicamentos})">Remover</button>
                </div>
            `;

            containerMedicamentos.appendChild(medicamentosDiv);

            const dosagemInput = document.getElementById(`dosagem${contaMedicamentos}`);
            dosagemInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '');
            });

            if (contaMedicamentos === maxMedicamentos) {
                botaoAdicionaMedicamento.disabled = true;
            }
        }
    });

    window.removeMedicamento = function(id) {
        const medicamentosDiv = document.getElementById(`medicamento${id}`);
        if (medicamentosDiv) {
            medicamentosDiv.remove();
            contaMedicamentos--;

            const botaoAdicionaMedicamento = document.getElementById('botaoAdicionaMedicamento');
            if (botaoAdicionaMedicamento.disabled && contaMedicamentos < maxMedicamentos) {
                botaoAdicionaMedicamento.disabled = false;
            }
        }
    };
}

function setupCirurgiasSection() {
    const containerCirurgias = document.getElementById('containerCirurgias');
    const botaoAdicionaCirurgia = document.getElementById('botaoAdicionaCirurgia');
    let contaCirurgias = 0;
    const maxCirurgias = 10;

    botaoAdicionaCirurgia.addEventListener('click', function() {
        if (contaCirurgias < maxCirurgias) {
            contaCirurgias++;
            const cirurgiasDiv = document.createElement('div');
            cirurgiasDiv.classList.add('row', 'gx-5', 'mb-3', 'align-items-end');
            cirurgiasDiv.id = `cirurgia${contaCirurgias}`;

            cirurgiasDiv.innerHTML = `
                <div class="col-md-3">
                    <label for="tipoCirurgia${contaCirurgias}" class="form-label">Tipo de cirurgia</label>
                    <input type="text" class="form-control" id="tipoCirurgia${contaCirurgias}" placeholder="Tipo">
                </div>
                <div class="col-md-2">
                    <label for="anoCirurgia${contaCirurgias}" class="form-label">Ano da cirurgia</label>
                    <input type="text" class="form-control" id="anoCirurgia${contaCirurgias}" placeholder="Ano" maxlength="4">
                </div>
                <div class="col-md-2">
                    <label class="form-label">Houve complicações?</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="complicacoes${contaCirurgias}" id="complicacoesSim${contaCirurgias}" value="sim" onclick="toggleComplicacao(${contaCirurgias}, true)">
                        <label class="form-check-label" for="complicacoesSim${contaCirurgias}">Sim</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="complicacoes${contaCirurgias}" id="complicacoesNao${contaCirurgias}" value="nao" onclick="toggleComplicacao(${contaCirurgias}, false)" checked>
                        <label class="form-check-label" for="complicacoesNao${contaCirurgias}">Não</label>
                    </div>
                </div>
                <div class="col-md-3">
                    <label for="explicacaoComplicacao${contaCirurgias}" class="form-label">Quais?</label>
                    <input type="text" class="form-control" id="explicacaoComplicacao${contaCirurgias}" placeholder="Complicações" disabled>
                </div>
                <div class="col-md-2 d-flex align-items-center">
                    <button type="button" class="btn btn-danger" onclick="removeCirurgia(${contaCirurgias})">Remover</button>
                </div>
            `;

            containerCirurgias.appendChild(cirurgiasDiv);

            const anoCirurgiaInput = document.getElementById(`anoCirurgia${contaCirurgias}`);
            anoCirurgiaInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '').slice(0, 4); 
            });

            if (contaCirurgias === maxCirurgias) {
                botaoAdicionaCirurgia.disabled = true;
            }
        }
    });

    window.removeCirurgia = function(id) {
        const cirurgiasDiv = document.getElementById(`cirurgia${id}`);
        if (cirurgiasDiv) {
            cirurgiasDiv.remove();
            contaCirurgias--;

            const botaoAdicionaCirurgia = document.getElementById('botaoAdicionaCirurgia');
            if (botaoAdicionaCirurgia.disabled && contaCirurgias < maxCirurgias) {
                botaoAdicionaCirurgia.disabled = false;
            }
        }
    };

    window.toggleComplicacao = function(id, isEnabled) {
        const explicacaoInput = document.getElementById(`explicacaoComplicacao${id}`);
        explicacaoInput.disabled = !isEnabled;
    };
}

function setupInternacoesSection() {
    const containerInternacoes = document.getElementById('containerInternacoes');
    const botaoAdicionaInternacao = document.getElementById('botaoAdicionaInternacao');
    let contaInternacoes = 0;
    const maxInternacoes = 10;

    botaoAdicionaInternacao.addEventListener('click', function() {
        if (contaInternacoes < maxInternacoes) {
            contaInternacoes++;
            const internacoesDiv = document.createElement('div');
            internacoesDiv.classList.add('row', 'gx-5', 'mb-3', 'align-items-end');
            internacoesDiv.id = `internacao${contaInternacoes}`;

            internacoesDiv.innerHTML = `
                <div class="col-md-4">
                    <label for="motivoInternacao${contaInternacoes}" class="form-label">Motivo da internação</label>
                    <input type="text" class="form-control" id="motivoInternacao${contaInternacoes}" placeholder="Motivo">
                </div>
                <div class="col-md-2">
                    <label for="anoInternacao${contaInternacoes}" class="form-label">Ano da internação</label>
                    <input type="text" class="form-control" id="anoInternacao${contaInternacoes}" placeholder="Ano" maxlength="4">
                </div>
                <div class="col-md-3">
                    <label for="duracaoInternacao${contaInternacoes}" class="form-label">Duração da internação</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="duracaoInternacao${contaInternacoes}" placeholder="Duração">
                        <select class="form-select" id="unidadeDuracao${contaInternacoes}">
                            <option value="dias">dias</option>
                            <option value="meses">meses</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-2 d-flex align-items-center">
                    <button type="button" class="btn btn-danger" onclick="removeInternacao(${contaInternacoes})">Remover</button>
                </div>
            `;

            containerInternacoes.appendChild(internacoesDiv);

            const anoInternacaoInput = document.getElementById(`anoInternacao${contaInternacoes}`);
            anoInternacaoInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '').slice(0, 4); 
            });

            const duracaoInternacaoInput = document.getElementById(`duracaoInternacao${contaInternacoes}`);
            duracaoInternacaoInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, ''); 
            });

            if (contaInternacoes === maxInternacoes) {
                botaoAdicionaInternacao.disabled = true;
            }
        }
    });

    window.removeInternacao = function(id) {
        const internacoesDiv = document.getElementById(`internacao${id}`);
        if (internacoesDiv) {
            internacoesDiv.remove();
            contaInternacoes--;

            const botaoAdicionaInternacao = document.getElementById('botaoAdicionaInternacao');
            if (botaoAdicionaInternacao.disabled && contaInternacoes < maxInternacoes) {
                botaoAdicionaInternacao.disabled = false;
            }
        }
    };
}

