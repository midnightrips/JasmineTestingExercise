describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a server when the server name input is empty', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update the server table', function() {
    submitServerInfo(); //need to run this function in order for the second one to not break
    updateServerTable();

  });

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
  });
});
