const pdf = require('html-pdf')
ejs = require('ejs')

    const geradorPdf = () => ejs.renderFile("./html.ejs", { pageTitle: 'Pagina Html com Ejs' }, (err, saida) => {
        if (err) {
            console.log(err)
        } else {
            pdf.create(saida, {}).toFile('./teste01.pdf', (err, res) => {
                if (err) {
                    console.log('erro')
                } else {
                    console.log(res)
                }
            })

        }
    })

module.exports = geradorPdf