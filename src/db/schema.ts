import { integer } from "drizzle-orm/pg-core";
import {pgTable,serial,text,timestamp } from "drizzle-orm/pg-core";
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
export const userDetails=pgTable("user_details",{
  id:serial("id").primaryKey(),
  name:text("name").notNull(),
  userId:integer("user_id").references(()=>users.id,{onDelete:"cascade"}).notNull(),
  createdAt:timestamp("created_at").defaultNow().notNull()
})