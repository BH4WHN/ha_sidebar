class HA {
    constructor() {

    }

    fullscreen() {
        try {
            let haPanelIframe = top.document.body
                .querySelector("home-assistant")
                .shadowRoot.querySelector("home-assistant-main")
                .shadowRoot.querySelector("app-drawer-layout partial-panel-resolver ha-panel-iframe").shadowRoot
            let ha_card = haPanelIframe.querySelector("iframe");
            ha_card.style.position = 'absolute'
            haPanelIframe.querySelector('app-toolbar').style.display = 'none'
            ha_card.style.top = '0'
            ha_card.style.height = '100%'
        } catch{

        }
    }

    post(params) {
        return this.http(top.location.pathname + '-api', params)
    }

    // http请求
    async http(url, params) {
        let hass = top.document.querySelector('home-assistant').hass
        let auth = hass.auth
        let authorization = ''
        if (auth._saveTokens) {
            // 过期
            if (auth.expired) {
                await auth.refreshAccessToken()
            }
            authorization = `${auth.data.token_type} ${auth.accessToken}`
        } else {
            authorization = `Bearer ${auth.data.access_token}`
        }
        return fetch(url, {
            method: 'post',
            headers: {
                authorization
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
    }
}

window.ha = new HA()