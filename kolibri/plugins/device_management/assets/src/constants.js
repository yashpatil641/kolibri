export const PageNames = {
  MANAGE_CONTENT_PAGE: 'MANAGE_CONTENT_PAGE',
  MANAGE_PERMISSIONS_PAGE: 'MANAGE_PERMISSIONS_PAGE',
  USER_PERMISSIONS_PAGE: 'USER_PERMISSIONS_PAGE',
  DEVICE_INFO_PAGE: 'DEVICE_INFO_PAGE',
};

export const ContentWizardPages = {
  AVAILABLE_CHANNELS: 'AVAILABLE_CHANNELS',
  LOADING_CHANNEL_METADATA: 'LOADING_CHANNEL_METADATA',
  SELECT_CONTENT: 'SELECT_CONTENT',
  SELECT_CONTENT_TOPIC: 'SELECT_CONTENT_TOPIC',
  SELECT_DRIVE: 'SELECT_DRIVE',
  SELECT_IMPORT_SOURCE: 'SELECT_IMPORT_SOURCE',
};

export const TaskTypes = {
  REMOTECHANNELIMPORT: 'REMOTECHANNELIMPORT',
  REMOTECONTENTIMPORT: 'REMOTECONTENTIMPORT',
  REMOTE_IMPORT: 'REMOTECONTENTIMPORT',
  LOCAL_IMPORT: 'DISKCONTENTIMPORT',
  LOCAL_EXPORT: 'DISKEXPORT',
  DELETE_CHANNEL: 'DELETECHANNEL',
};

export const TaskStatuses = {
  IN_PROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  QUEUED: 'QUEUED',
  SCHEDULED: 'SCHEDULED',
};

export const TransferTypes = {
  LOCALIMPORT: 'localimport',
  REMOTEIMPORT: 'remoteimport',
  LOCALEXPORT: 'localexport',
};
