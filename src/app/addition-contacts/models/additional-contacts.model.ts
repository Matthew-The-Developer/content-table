import { Phone } from "./phone.model";
import { RelationshipType } from "./relationship-type.enum";

export interface AdditionContact {
  name: string;
  relationship: RelationshipType;
  phones: Phone[];
  hippaCompliant: boolean;
}