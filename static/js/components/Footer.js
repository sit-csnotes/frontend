importComponents(['LinkList'])

registerComponent("Footer", {
    defaultState: {
        links: [
            ['Report a concern', '/report'],
            ['View us on GitHub', 'https://github.com/sit-csnotes']
        ],
        version: 'v1.0',
        productName: 'csNotes'
    },
    render: (props, state) => pageTemplate`
    <footer>
        <div class="footer-section">
        ${state.productName + ' ' +state.version}
        <ul>
            ${window.rawHTMLComponent((state.links || []).map(a=>`<li><a href="${a[1]}">${a[0]}</a></li>`).join(' '))}
        </ul>
        </div>
        <div class="footer-section">
            Made with ❤️ in Hoboken.
        </div>
    </footer>
    `
})

//         