const ROLES = {
  ADMIN: "admin",
  STUDENT: "student",
  TEACHER: "teacher",
};

const PAGE_TITLE = {
  DASHBOARD: "dashboard",
  QUIZ: "quiz",
  TEACHER: "teacher",
  TEACHERS: "teachers",
  STUDENT: "student",
  STUDENTS: "students",
  REPORT: "report",
  PROFILE: "profile",
  QUIZES: "quizes",
  LOGIN: "login",
  REGISTER: "register",
};

const PROPOSAL_ACTIONS = {
  ACCEPT: "accept",
  REJECT: "reject",
  PENDING: "pending",
};

const INTEGRATION_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
};

const INTEGRATIONS_TYPE = {
  GOOGLE: "google",
  SLACK: "slack",
  CALENDLY: "calendly",
  ZOOM: "zoom",
  MICROSOFT: "microsoft",
  GOOGLE_DRIVE: "google_drive",
  GOOGLE_MEET: "google_meet",
  GOOGLE_CALENDAR: "google_calendar",
  SMART_CALENDAR: "smart_calendar",
};

const WEEKDAYS = [
  {
    short: "Sun",
    long: "Sunday",
    s_short: "S",
  },
  {
    short: "Mon",
    long: "Monday",
    s_short: "M",
  },
  {
    short: "Tue",
    long: "Tuesday",
    s_short: "T",
  },
  {
    short: "Wed",
    long: "Wednesday",
    s_short: "W",
  },
  {
    short: "Thu",
    long: "Thursday",
    s_short: "T",
  },
  {
    short: "Fri",
    long: "Friday",
    s_short: "F",
  },
  {
    short: "Sat",
    long: "Saturday",
    s_short: "S",
  },
];

const MONTHS = [
  {
    short: "Jan",
    long: "January",
  },
  {
    short: "Feb",
    long: "February",
  },
  {
    short: "Mar",
    long: "March",
  },
  {
    short: "Apr",
    long: "April",
  },
  {
    short: "May",
    long: "May",
  },
  {
    short: "Jun",
    long: "June",
  },
  {
    short: "Jul",
    long: "July",
  },
  {
    short: "Aug",
    long: "August",
  },
  {
    short: "Sep",
    long: "September",
  },
  {
    short: "Oct",
    long: "October",
  },
  {
    short: "Nov",
    long: "November",
  },
  {
    short: "Dec",
    long: "December",
  },
];

const MEETING_STATUS = {
  ACTIVE: "active",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
};

const INPUT_TYPES = {
  TEXT: "text",
  PASSWORD: "password",
  EMAIL: "email",
  NUMBER: "number",
  DATE: "date",
};

const RECURRING_TYPE = {
  DAILY: "daily",
  WEEKLY: "weekly",
  MONTHLY: "monthly",
};

const SELECT_TIME_OPTIONS = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

const SELECT_TIMEZONE_OPTIONS = {
  UTC: "UTC",
  GMT: "GMT",
  IST: "IST",
  EST: "EST",
  CST: "CST",
  PST: "PST",
  MST: "MST",
  AST: "AST",
  HST: "HST",
};

const CARD_SKELETON_TYPE = {
  MEETING: "meeting",
  WEATHER: "weather",
  TRAVEL: "travel",
};

// const WEATHER_ICONS = {
//   "01d": {
//     sc_icon: images.sun_1,
//     ow_icon: "wi-day-sunny",
//   },
//   "01n": {
//     sc_icon: images.moon,
//     ow_icon: "wi-day-sunny",
//   },
//   "02d": {
//     sc_icon: images.cloud_notif,
//     ow_icon: "wi-day-sunny",
//   },
//   "02n": {
//     sc_icon: images.cloud_sunny,
//     ow_icon: "wi-day-sunny",
//   },
//   "03d": {
//     sc_icon: images.cloud_minus,
//     ow_icon: "wi-day-sunny",
//   },
//   "03n": {
//     sc_icon: images.cloud_minus,
//     ow_icon: "wi-day-sunny",
//   },
//   "04d": {
//     sc_icon: images.cloud_cross,
//     ow_icon: "wi-day-sunny",
//   },
//   "04n": {
//     sc_icon: images.cloud_cross,
//     ow_icon: "wi-day-sunny",
//   },
//   "09d": {
//     sc_icon: images.cloud_drizzle,
//     ow_icon: "wi-day-sunny",
//   },
//   "09n": {
//     sc_icon: images.cloud_drizzle,
//     ow_icon: "wi-day-sunny",
//   },
//   "10d": {
//     sc_icon: images.drop,
//     ow_icon: "wi-day-sunny",
//   },
//   "10n": {
//     sc_icon: images.drop,
//     ow_icon: "wi-day-sunny",
//   },
//   "11d": {
//     sc_icon: images.cloud_lightning,
//     ow_icon: "wi-day-sunny",
//   },
//   "11n": {
//     sc_icon: images.cloud_lightning,
//     ow_icon: "wi-day-sunny",
//   },
//   "13d": {
//     sc_icon: images.cloud_snow,
//     ow_icon: "wi-day-sunny",
//   },
//   "13n": {
//     sc_icon: images.cloud_snow,
//     ow_icon: "wi-day-sunny",
//   },
//   "50d": {
//     sc_icon: images.wind,
//     ow_icon: "wi-day-sunny",
//   },
//   "50n": {
//     sc_icon: images.wind,
//     ow_icon: "wi-day-sunny",
//   },
// };

const LABEL_TYPES = {
  MEETING: "meeting",
  CALL: "call",
  EMAIL: "email",
  FOLLOW_UP: "follow_up",
  TASK: "task",
  ACTION_ITEM: "action_item",
  KEY_TAKEAWAY: "key_takeaway",
  SUMMARY: "summary",
};

const AVAILABILITY = {
  AVAILABLE: "available",
  BUSY: "busy",
};

const SELECT_TIME_FORMAT_OPTIONS = {
  12: "12 hours",
  24: "24 hours",
};

const COUNTRY_OPTIONS = {
  AFG: "Afghanistan",
  ALB: "Albania",
  DZA: "Algeria",
  ASM: "American Samoa",
  IND: "India",
  USA: "United States",
  GBR: "United Kingdom",
  CAN: "Canada",
  AUS: "Australia",
  DEU: "Germany",
};

const LANGUAGE_OPTIONS = {
  ENG: "English",
  SPA: "Spanish",
  FRE: "French",
  GER: "German",
  ITA: "Italian",
  JPN: "Japanese",
  KOR: "Korean",
  CHI: "Chinese",
  RUS: "Russian",
  POR: "Portuguese",
  DUT: "Dutch",
  TUR: "Turkish",
  ARB: "Arabic",
  HIN: "Hindi",
  BEN: "Bengali",
  URD: "Urdu",
  PAN: "Punjabi",
  GUJ: "Gujarati",
  MAR: "Marathi",
  TEL: "Telugu",
  TAM: "Tamil",
  KAN: "Kannada",
  MAL: "Malayalam",
  ORI: "Oriya",
};

export const enums = {
  ROLES,
  PROPOSAL_ACTIONS,
  INTEGRATIONS_TYPE,
  INTEGRATION_STATUS,
  WEEKDAYS,
  MONTHS,
  MEETING_STATUS,
  INPUT_TYPES,
  RECURRING_TYPE,
  SELECT_TIME_OPTIONS,
  SELECT_TIMEZONE_OPTIONS,
  CARD_SKELETON_TYPE,
  LABEL_TYPES,
  AVAILABILITY,
  SELECT_TIME_FORMAT_OPTIONS,
  COUNTRY_OPTIONS,
  LANGUAGE_OPTIONS,
  PAGE_TITLE,
};
