/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Trip } from "@prisma/client";

export class TripServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TripCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripCountArgs>
  ): Promise<number> {
    return this.prisma.trip.count(args);
  }

  async trips<T extends Prisma.TripFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripFindManyArgs>
  ): Promise<Trip[]> {
    return this.prisma.trip.findMany(args);
  }
  async trip<T extends Prisma.TripFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripFindUniqueArgs>
  ): Promise<Trip | null> {
    return this.prisma.trip.findUnique(args);
  }
  async createTrip<T extends Prisma.TripCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripCreateArgs>
  ): Promise<Trip> {
    return this.prisma.trip.create<T>(args);
  }
  async updateTrip<T extends Prisma.TripUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripUpdateArgs>
  ): Promise<Trip> {
    return this.prisma.trip.update<T>(args);
  }
  async deleteTrip<T extends Prisma.TripDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TripDeleteArgs>
  ): Promise<Trip> {
    return this.prisma.trip.delete(args);
  }
}
