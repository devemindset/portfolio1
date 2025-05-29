export interface UserData {
  id: number;
  username: string;
  email: string;
  auth_provider: "email" | "google";
  is_social_account: boolean;
  created_at: string;

}

export interface Domain {
  name: string;
}

export interface Field {
  name: string;
  domaine: Domain;
}

export interface ProjectFiles {
  preview_page_name: string;
  preview_page_file: string | null;
  preview_page_video: string | null;
  site_name: string;
  created_at: string;
}

export interface ProjectStatus {
  id: number;
  project_name: string;
  level: "junior" | "mid" | "senior";
  type: string;
  status: "resolved" | "in progress" | "unresolved";
  field : Field;
  slug : string;
  is_premium : boolean;
  price : number;
}

export interface Project {
  project_name: string;
  level: "junior" | "mid" | "senior";
  type: string;
  group: string;
  xp: number;
  is_premium: boolean;
  field: Field;
  project_file: ProjectFiles;
  image_status: "visible" | "blurred";
  slug : string
  created_at: string;
  updated_at: string;
  challenge: {
    github_link: string | null;
    deployment_link: string | null;
    unlocked: boolean;
  } | null | undefined ;
  problem_statement : string;
  tech_stack : string;
  hints : string;
}

export interface Challenge {
  github_link: string | null;
  deployment_link: string | null;
  unlocked: boolean;
  created_at: string;
  updated_at: string;
  project: {
    project_name: string;
    level: "junior" | "mid" | "senior";
    type: string;
  };
  personnal_notes : string;
}

export interface ResolvedChallenge {
  project: {
    project_name: string;
    level: "junior" | "mid" | "senior";
    type: string;
  };
  github_link: string | null;
  deployment_link: string | null;
}

export interface UserResolvedData {
  username: string;
  xp: number;
  level: string;
  badges: string[];
  resolved_challenges: ResolvedChallenge[];
}
export interface UserProfile {
  xp: number;
  level: string;
  badges: string[]; 
}