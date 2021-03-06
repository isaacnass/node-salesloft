import Resource from '../Resource';
import { GenericResourceResponse } from '../SalesLoft';

export default class Users extends Resource {
  constructor(endpoint: string, apiKey: string) {
    super(endpoint, apiKey);
  }

  async list(filter: UsersFilter):Promise<UserResponse[]> {
    return await super.list(filter);
  }

  async fetch(id: number):Promise<UserResponse> {
    return await super.fetch(id);
  }
}

export interface UsersFilter {
  guid: number[];
}

export interface UserResponse {
  id: number;
  guid: string;
  created_at: string;
  updated_at: string;
  name: string;
  first_name: string;
  last_name: string;
  active: boolean;
  time_zone: string;
  slack_username: string;
  twitter_handle: string;
  email: string;
  email_client_email_address: string;
  sending_email_address: string;
  from_address: string;
  full_email_address: string;
  bcc_email_address: string;
  email_signature: string;
  email_signature_type: string;
  email_signature_click_tracking_disabled: boolean;
  team_admin: boolean;
  local_dial_enabled: boolean;
  click_to_call_enabled: boolean;
  email_client_configured: boolean;
  crm_connected: boolean;
  phone_client: {
    id: number;
  };
  phone_number_assignment: string;
  group: string;
  team: GenericResourceResponse;
}
