const Response {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  res: <ref *1> IncomingMessage {
    _readableState: ReadableState {
      objectMode: false,
      highWaterMark: 16384,
      buffer: [BufferList],
      length: 0,
      pipes: [],
      flowing: true,
      ended: true,
      endEmitted: true,2
      reading: false,
      constructed: true,
      sync: true,
      needReadable: false,
      emittedReadable: false,
      readableListening: false,
      resumeScheduled: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: true,
      destroyed: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      defaultEncoding: 'utf8',
      awaitDrainWriters: null,
      multiAwaitDrain: false,
      readingMore: true,
      dataEmitted: true,
      decoder: [StringDecoder],
      encoding: 'utf8',
      [Symbol(kPaused)]: false
    },
    _events: [Object: null prototype] {
      end: [Array],
      data: [Array],
      error: [Array],
      close: [Function: bound emit]
    },
    _eventsCount: 4,
    _maxListeners: undefined,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(async_id_symbol)]: 183,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    rawHeaders: [
      'X-Powered-By',
      'Express',
      'Access-Control-Allow-Origin',
      '*',
      'Content-Type',
      'application/json; charset=utf-8',
      'Content-Length',
      '63',
      'ETag',
      'W/"3f-lITuC3LIoK6Zy7KSW3O62ft2hzU"',
      'Date',
      'Thu, 27 Apr 2023 15:40:44 GMT',
      'Connection',
      'close'
    ],
    rawTrailers: [],
    aborted: false,
    upgrade: false,
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [ClientRequest],
      [Symbol(async_id_symbol)]: 183,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _consuming: false,
    _dumped: false,
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 56,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: [Socket],
      _header: 'POST /users HTTP/1.1\r\n' +
        'Host: 127.0.0.1:57690\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Content-Length: 56\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/users',
      _ended: true,
      res: [Circular *1],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: '127.0.0.1',
      protocol: 'http:',
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: true,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(kUniqueHeaders)]: null
    },
    text: '{"user":{"success":true,"message":"User created successfully"}}',
    [Symbol(kCapture)]: false,
    [Symbol(kHeaders)]: {
      'x-powered-by': 'Express',
      'access-control-allow-origin': '*',
      'content-type': 'application/json; charset=utf-8',
      'content-length': '63',
      etag: 'W/"3f-lITuC3LIoK6Zy7KSW3O62ft2hzU"',
      date: 'Thu, 27 Apr 2023 15:40:44 GMT',
      connection: 'close'
    },
    [Symbol(kHeadersCount)]: 14,
    [Symbol(kTrailers)]: null,
    [Symbol(kTrailersCount)]: 0
  },
  request: Test {
    _events: [Object: null prototype] {},
    _eventsCount: 0,
    _maxListeners: undefined,
    _enableHttp2: false,
    _agent: false,
    _formData: null,
    method: 'POST',
    url: 'http://127.0.0.1:57690/users',
    _header: { 'content-type': 'application/json' },
    header: { 'Content-Type': 'application/json' },
    writable: true,
    _redirects: 0,
    _maxRedirects: 0,
    cookies: '',
    qs: {},
    _query: [],
    qsRaw: [],
    _redirectList: [],
    _streamRequest: false,
    _lookup: undefined,
    _buffer: true,
    app: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 0,
      _handle: null,
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::0',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 181,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: [Timeout],
      [Symbol(kUniqueHeaders)]: null
    },
    _asserts: [ [Function (anonymous)] ],
    _server: Server {
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      requestTimeout: 300000,
      headersTimeout: 60000,
      keepAliveTimeout: 5000,
      connectionsCheckingInterval: 30000,
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _connections: 0,
      _handle: null,
      _usingWorkers: false,
      _workers: [],
      _unref: false,
      allowHalfOpen: true,
      pauseOnConnect: false,
      noDelay: true,
      keepAlive: false,
      keepAliveInitialDelay: 0,
      httpAllowHalfOpen: false,
      timeout: 0,
      maxHeadersCount: null,
      maxRequestsPerSocket: 0,
      _connectionKey: '6::::0',
      [Symbol(IncomingMessage)]: [Function: IncomingMessage],
      [Symbol(ServerResponse)]: [Function: ServerResponse],
      [Symbol(kCapture)]: false,
      [Symbol(async_id_symbol)]: 181,
      [Symbol(http.server.connections)]: ConnectionsList {},
      [Symbol(http.server.connectionsCheckingInterval)]: [Timeout],
      [Symbol(kUniqueHeaders)]: null
    },
    _data: { email: 'johndoe@example.com', password: 'password123' },
    req: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 56,
      _hasBody: true,
      _trailer: '',
      finished: true,
      _headerSent: true,
      _closed: false,
      socket: [Socket],
      _header: 'POST /users HTTP/1.1\r\n' +
        'Host: 127.0.0.1:57690\r\n' +
        'Accept-Encoding: gzip, deflate\r\n' +
        'Content-Type: application/json\r\n' +
        'Content-Length: 56\r\n' +
        'Connection: close\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: '/users',
      _ended: true,
      res: [IncomingMessage],
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: '127.0.0.1',
      protocol: 'http:',
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kEndCalled)]: true,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(kUniqueHeaders)]: null
    },
    protocol: 'http:',
    host: '127.0.0.1:57690',
    _endCalled: true,
    _callback: [Function (anonymous)],
    res: <ref *1> IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [ClientRequest],
      text: '{"user":{"success":true,"message":"User created successfully"}}',
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 14,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    _resBuffered: true,
    response: [Circular *2],
    called: true,
    [Symbol(kCapture)]: false
  },
  req: <ref *3> ClientRequest {
    _events: [Object: null prototype] {
      drain: [Function],
      error: [Function (anonymous)],
      finish: [Function: requestOnFinish]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    maxRequestsOnConnectionReached: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    strictContentLength: false,
    _contentLength: 56,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    _closed: false,
    socket: Socket {
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: null,
      _closeAfterHandlingError: false,
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: null,
      _server: null,
      parser: null,
      _httpMessage: [Circular *3],
      [Symbol(async_id_symbol)]: 183,
      [Symbol(kHandle)]: [TCP],
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kSetNoDelay)]: true,
      [Symbol(kSetKeepAlive)]: false,
      [Symbol(kSetKeepAliveInitialDelay)]: 0,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0
    },
    _header: 'POST /users HTTP/1.1\r\n' +
      'Host: 127.0.0.1:57690\r\n' +
      'Accept-Encoding: gzip, deflate\r\n' +
      'Content-Type: application/json\r\n' +
      'Content-Length: 56\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: nop],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 80,
      protocol: 'http:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype],
      freeSockets: [Object: null prototype] {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'POST',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    path: '/users',
    _ended: true,
    res: <ref *1> IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 4,
      _maxListeners: undefined,
      socket: [Socket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      rawHeaders: [Array],
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK',
      client: [Socket],
      _consuming: false,
      _dumped: false,
      req: [Circular *3],
      text: '{"user":{"success":true,"message":"User created successfully"}}',
      [Symbol(kCapture)]: false,
      [Symbol(kHeaders)]: [Object],
      [Symbol(kHeadersCount)]: 14,
      [Symbol(kTrailers)]: null,
      [Symbol(kTrailersCount)]: 0
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: '127.0.0.1',
    protocol: 'http:',
    [Symbol(kCapture)]: false,
    [Symbol(kBytesWritten)]: 0,
    [Symbol(kEndCalled)]: true,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      host: [Array],
      'accept-encoding': [Array],
      'content-type': [Array],
      'content-length': [Array]
    },
    [Symbol(kUniqueHeaders)]: null
  },
  text: '{"user":{"success":true,"message":"User created successfully"}}',
  files: undefined,
  buffered: true,
  headers: {
    'x-powered-by': 'Express',
    'access-control-allow-origin': '*',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '63',
    etag: 'W/"3f-lITuC3LIoK6Zy7KSW3O62ft2hzU"',
    date: 'Thu, 27 Apr 2023 15:40:44 GMT',
    connection: 'close'
  },
  header: {
    'x-powered-by': 'Express',
    'access-control-allow-origin': '*',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '63',
    etag: 'W/"3f-lITuC3LIoK6Zy7KSW3O62ft2hzU"',
    date: 'Thu, 27 Apr 2023 15:40:44 GMT',
    connection: 'close'
  },
  statusCode: 200,
  status: 200,
  statusType: 2,
  info: false,
  ok: true,
  redirect: false,
  clientError: false,
  serverError: false,
  error: false,
  created: false,
  accepted: false,
  noContent: false,
  badRequest: false,
  unauthorized: false,
  notAcceptable: false,
  forbidden: false,
  notFound: false,
  unprocessableEntity: false,
  type: 'application/json',
  charset: 'utf-8',
  links: {},
  setEncoding: [Function: bound ],
  redirects: [],
  _body: { user: { success: true, message: 'User created successfully' } },
  pipe: [Function (anonymous)],
  [Symbol(kCapture)]: false
}