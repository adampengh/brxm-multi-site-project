import UiExtension from "@bloomreach/ui-extension";
(function () {
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const ui = await UiExtension.register();
            const brDocument = await ui.document.get();
            const value = await ui.document.field.getValue();

            showFieldValue(value);
            initSetFieldValueButton(ui, brDocument.mode);

        } catch (error) {
            console.error('Failed to register extension:', error.message);
            console.error('- error code:', error.code);
        }
    });

    function initSetFieldValueButton(ui, mode) {
        const buttonElement = document.querySelector('#setFieldValue');
        if (mode !== 'edit') {
            buttonElement.style.display = 'none';
            return;
        }

        buttonElement.style.display = 'block';
        buttonElement.addEventListener('click', async () => {
            try {
                var value = 'Hello Button';
                ui.document.field.setValue(value);
                showFieldValue(value);
            } catch (error) {
                console.error('Error: ', error.code, error.message);
            }
        });
    }

    function showFieldValue(value) {
        document.querySelector('#fieldValue').innerHTML = value;
    }
})();
