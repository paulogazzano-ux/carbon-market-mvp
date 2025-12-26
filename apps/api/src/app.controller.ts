import { Controller, Get } from "@nestjs/common";
import { listings } from "./listings";

@Controller()
export class AppController {
  @Get("/health")
  health() {
    return { status: "ok" };
  }

  @Get("/listings")
  getListings() {
    return listings;
  }
}
