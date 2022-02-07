const pdf = require('html-pdf')

conteudo = `
<body>
    <h1 style='color: red'>Página html</h1>
    <hr>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolore provident excepturi perferendis dolorem architecto culpa est fuga sunt assumenda veniam reiciendis illum, enim sit tenetur qui obcaecati voluptas quas.
    </p>
</body>

`

pdf.create(conteudo, {}).toFile('./teste01.pdf', (err, res) => {
    if (err) {
        console.log('erro')
    } else {
        console.log(res)
    }
})