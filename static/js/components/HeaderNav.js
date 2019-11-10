registerComponent("HeaderNav", {
    defaultState: {},
    render: (props, state) => pageTemplate`
    <div class="nav">
    <div class="logo">~/<strong>cs</strong>notes</div>
    <div class="search-box-container"><input placeholder="Search for a problem..." /></div>
    <nav>
        <ul>
            <li><a href="/login.html">Log in</a></li>
            <li><a href="/post.html">+ Post</a></li>
            <li><a href="/me.html">Profile</a></li>
        </ul>
    </nav>
</div>
    `
})

//         