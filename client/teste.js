const stringToDate = string => new Date(
    string.slice(0, 4),
    string.slice(5, 7),
    string.slice(8, 10),
    string.slice(11, 13),
    string.slice(14, 16),
    string.slice(17, 19),
    string.slice(20, 23),
);

// list.sort((a, b) => (stringToDate(a.data_criacao) - stringToDate(b.data_criacao)) * -1);

const list = [
    {
        id: 2,
        descricao: "BLA BLA BLA",
        concluido: false,
        data_criacao: "2021-11-05T17:41:42.094Z",
        data_termino: null,
        createdAt: "2021-11-05T17:41:42.096Z",
        updatedAt: "2021-11-05T17:41:42.096Z"
    },
    {
        id: 3,
        descricao: "BLA BLA BLA",
        concluido: true,
        data_criacao: "2021-11-07T20:20:36.664Z",
        data_termino: "2021-11-07T20:20:51.490Z",
        createdAt: "2021-11-07T20:20:36.666Z",
        updatedAt: "2021-11-07T20:20:51.491Z"
    },
    {
        id: 4,
        descricao: "testar a inclusao baseada na data",
        concluido: false,
        data_criacao: "2021-11-07T23:44:23.030Z",
        data_termino: null,
        createdAt: "2021-11-07T23:44:23.032Z",
        updatedAt: "2021-11-07T23:44:23.032Z"
    }
]

console.log(
    stringToDate(list[0].data_criacao)
        .getTime()
)

// list .sort((a, b) => (
//    stringToDate(a.data_criacao).getTime() - stringToDate(b.data_criacao).getTime()) * -1);

//     console.log(list);