import * as CustomersRepository from "@modules/customers/infra/typeorm/repositories/CustomersRepository"
// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new CustomersRepository.default()
    })

    test("0", async () => {
        await inst.create({ name: "Anas", email: "ponicode.com" })
    })

    test("1", async () => {
        await inst.create({ name: "Jean-Philippe", email: "something.example.com" })
    })

    test("2", async () => {
        await inst.create({ name: "Jean-Philippe", email: "user1+user2@mycompany.com" })
    })

    test("3", async () => {
        await inst.create({ name: "George", email: "user@host:300" })
    })

    test("4", async () => {
        await inst.create({ name: "Anas", email: "user@host:300" })
    })

    test("5", async () => {
        await inst.create({ name: "", email: "" })
    })
})

// @ponicode
describe("findById", () => {
    let inst: any

    beforeEach(() => {
        inst = new CustomersRepository.default()
    })

    test("0", async () => {
        await inst.findById("03ea49f8-1d96-4cd0-b279-0684e3eec3a9")
    })

    test("1", async () => {
        await inst.findById("7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("2", async () => {
        await inst.findById("a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("3", async () => {
        await inst.findById("")
    })
})

// @ponicode
describe("findByEmail", () => {
    let inst: any

    beforeEach(() => {
        inst = new CustomersRepository.default()
    })

    test("0", async () => {
        await inst.findByEmail("ponicode.com")
    })

    test("1", async () => {
        await inst.findByEmail("something.example.com")
    })

    test("2", async () => {
        await inst.findByEmail("user1+user2@mycompany.com")
    })

    test("3", async () => {
        await inst.findByEmail("TestUpperCase@Example.com")
    })

    test("4", async () => {
        await inst.findByEmail("user@host:300")
    })

    test("5", async () => {
        await inst.findByEmail("")
    })
})
