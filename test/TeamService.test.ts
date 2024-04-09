import { describe, expect, test } from "bun:test";
import TeamService from "../src/services/TeamService";

const teamService = new TeamService();

describe("TeamService", () => {
  test("Create Team", async () => {
    const team = {
      name: "PT-GCSW",
      description: "GCSW Team",
      leader: "Diego Aranda",
    };
    const createdTeam = await teamService.createTeam(team);
    expect(createdTeam).toBeDefined();
    expect(createdTeam!.name).toBe(team.name);
    expect(createdTeam!.description).toBe(team.description);
    expect(createdTeam!.leader).toBe(team.leader);
  });

  test("Get Team by Name", async () => {
    const name = "PT-GCSW";
    const team = await teamService.getTeamByName(name);
    expect(team).toBeDefined();
    expect(team!.name).toBe(name);
  });

  test("Get Team by Name - not found", async () => {
    const team = await teamService.getTeamByName("nonexistent");
    expect(team).toBeNull();
  });
});
