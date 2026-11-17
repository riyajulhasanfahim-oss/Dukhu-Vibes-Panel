/**
 * White-label application configuration.
 * In Phase 2+, brand settings, active currency, and backend provider bindings
 * can be hydrated dynamically from the Admin Panel & App Initialization layer.
 */
export interface AppBrandConfig {
  brandName: string;
  brandTagline: string;
  currencySymbol: string;
  currencyCode: string;
  supportEmail: string;
  supportHours: string;
  dataSourceMode: 'demo' | 'remote';
}

export const APP_CONFIG: AppBrandConfig = {
  brandName: 'Dukhu Vibes Panel',
  brandTagline: 'SMM Panel',
  currencySymbol: '৳',
  currencyCode: 'BDT',
  supportEmail: 'support@dukhuvibespanel.com',
  supportHours: '24/7 Live Assistance',
  dataSourceMode: 'remote',
};
