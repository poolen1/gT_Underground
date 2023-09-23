import { UserProfile } from "../models/user-profile.model";

export interface ProfileResult {
  success: boolean;
  message: string;
  profile: UserProfile;
}
