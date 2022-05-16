import * as project_service from "@services/project-service"
// @ponicode
describe("project_service.getAllProjects", () => {
    test("0", async () => {
        await project_service.getAllProjects(undefined)
    })
})
