import UiExtension from "@bloomreach/ui-extension";
(function() {
    document.addEventListener('DOMContentLoaded', () => {
        UiExtension.register().then((ui) => {
            showPreviewButton(ui);

            ui.channel.page.on('navigate', () => {
                showPreviewButton(ui);
            });

            onClick('refreshChannel', () => ui.channel.refresh());
            onClick('refreshPage', () => ui.channel.page.refresh());
        });
    });

    const onClick = (id, listener) => {
        document.getElementById(id).addEventListener('click', listener);
    }

    const showPreviewButton = (ui) => {
        ui.channel.page.get()
            .then((page) => {
                console.log(page);
                const path = page.path;
                const config = JSON.parse(ui.extension.config);
                const baseUrl = config.spaUrl;
                console.log('URL', baseUrl + path);

                const link = document.getElementById('previewButton');
                link.href = baseUrl + path + '?preview=true';
            });
    }
})();
