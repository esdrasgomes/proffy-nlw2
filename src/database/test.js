const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Esdras Gomes",
        avatar: "https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/99395747_2636624659990507_3261261683959529472_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFWray5WaJc3-35Gx-iKhTnKKkzLLZ7lhMoqTMstnuWE4tTMShkUYXe-TGdGt2SCohqiNgrlYYdobaqHfe4P745&_nc_ohc=fR8q5VMy8UEAX9zunOU&_nc_ht=scontent.frec3-2.fna&oh=22223d291496418659c5e6a22b07709b&oe=601595E3",
        whatsapp: "81999999999",
        bio: "Lorem Ipsum é simplesmente um texto fictício da indústria de impressão e composição. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galé do tipo e embaralhou para fazer um livro de amostra de tipos",
    }

    classValue = {
        subject: 1,
        cost: "40",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})


    // Consultar dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    // console.log(selectClassesSchedules)

})