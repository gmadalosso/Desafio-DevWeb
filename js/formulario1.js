document.addEventListener('DOMContentLoaded', function() {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, ''); 

        if (value.length > 11) {
            value = value.substring(0, 11);
        }

        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
        } else if (value.length > 3) {
            value = value.replace(/(\d{3})(\d{1,3})/, '$1.$2');
        }

        this.value = value;
    });

    cpfInput.addEventListener('blur', function() {
        let value = this.value.replace(/\D/g, ''); 

        if (value.length === 11) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            this.value = value;
        }
    });

    const dddInputs = document.querySelectorAll('input[id^="ddd"]');
    dddInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, ''); 
            if (this.value.length > 2) {
                this.value = this.value.substring(0, 2); 
            }
        });
    });

    const phoneInputs = document.querySelectorAll('input[id^="numeroTelefone"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, ''); 

            if (value.length > 9) {
                value = value.substring(0, 9);
            }

            if (value.length > 5) {
                value = value.replace(/(\d{5})(\d{1,4})/, '$1-$2');
            }

            this.value = value;
        });

        input.addEventListener('blur', function() {
            let value = this.value.replace(/\D/g, '');

            if (value.length === 9) {
                value = value.replace(/(\d{5})(\d{4})/, '$1-$2');
                this.value = value;
            }
        });
    });

    document.getElementById('botaoProximaPagina').addEventListener('click', function() {
        const DadosFormulario = {
            primeiroNome: document.getElementById('primeiroNome').value,
            sobrenome: document.getElementById('sobrenome').value,
            cpf: document.getElementById('cpf').value,
            dataNascimento: document.getElementById('dataNascimento').value,
            sexoBiologico: document.getElementById('sexoBiologico').value,
            ddd: document.getElementById('ddd').value,
            numeroTelefone: document.getElementById('numeroTelefone').value,
            email: document.getElementById('email').value,
            nomeEmergencia: document.getElementById('nomeEmergencia').value,
            sobrenomeEmergencia: document.getElementById('sobrenomeEmergencia').value,
            dddEmergencia: document.getElementById('dddEmergencia').value,
            numeroTelefoneEmergencia: document.getElementById('numeroTelefoneEmergencia').value,
            emailEmergencia: document.getElementById('emailEmergencia').value
        };
        localStorage.setItem('formulario1', JSON.stringify(DadosFormulario));
        window.location.href = 'formulario2.html'; 
    });
});
