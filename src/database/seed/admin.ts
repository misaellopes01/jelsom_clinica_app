import { hash } from "bcrypt"
import { createConnection } from "typeorm"
import { v4 as uuidV4 } from "uuid"

async function create() {
    
    const connection = await createConnection()

    const id = uuidV4()

    const password = await hash("admin", 8)

    await connection.query(
        `INSERT INTO users(id, name, email, password, age, location, gender, phone, bi, admin, created_at) VALUES('${id}', 'Jelsom Mita', 'jelom@gmail.com', '${password}', 21, 'Lobito, Benguela', 'M', 995606060, 'AAABBBCCC', true, CURRENT_TIMESTAMP)`
    )

    await connection.close()
}

create().then(() => console.log("Admin User Created Successful!"))