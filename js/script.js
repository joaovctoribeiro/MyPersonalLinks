/**
 * Função para mudar entre o dark e light mode.
 * 
 * Function to switch between dark and light mode.
 */

function toggleMode() {

    const body = document.body;
    const checkbox = document.getElementById('darkLightMode');

    /**
     * Verificando se a caixa de seleção foi acionada, se sim, o modo escuro é ativado.
     * 
     * Checking if the checkbox has been triggered, if yes, dark mode is enabled.
     */

    if (checkbox.checked) {

        body.classList.add('dark-mode');

    } else {

        body.classList.remove('dark-mode');

    }
}