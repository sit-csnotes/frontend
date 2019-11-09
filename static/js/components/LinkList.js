registerComponent("LinkList", {
    defaultState: {},
    render: (props, state) => pageTemplate`
    <ul>
        ${(props.links || []).map(a=>`<li><a href="${a[0]}">${a[1]}</a></li>`).join(' ')}
    </ul>
    `
})