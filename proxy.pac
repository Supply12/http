const TOR = "SOCKS5 127.0.0.1:9050; SOCKS5 192.168.0.25:9050"; // SOCKS именно 5, если просто сокс то днс не резолвится
const I2PD = "SOCKS5 127.0.0.1:9055"; // та-же история
const ygg_pattern = new RegExp(
  '^0?[23][0-9A-Fa-f]{2}(:(:[0-9A-Fa-f]{1,4}){1,6}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,5}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,4}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,3}|::|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){1,2}|::|:[0-9A-Fa-f]{1,4}(::[0-9A-Fa-f]{1,4}|::|:[0-9A-Fa-f]{1,4}(::|:[0-9A-Fa-f]{1,4})))))))|(:(:[0-9A-Fa-f]{1,4}){0,4}|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){0,3}|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4}){0,2}|:[0-9A-Fa-f]{1,4}(:(:[0-9A-Fa-f]{1,4})?|:[0-9A-Fa-f]{1,4}(:|:[0-9A-Fa-f]{1,4}))))):(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$'
);

function FindProxyForURL(url, host) {
  if (isInNet(host, "192.168.0.0", "255.255.0.0")) return "DIRECT";
  if (isInNet(host, "10.144.0.0", "255.255.0.0")) return "DIRECT";
  if (shExpMatch(host, "*vk.ru") ||
    shExpMatch(host, "*vk.com") ||
    shExpMatch(host, "*userapi.com") ||
    shExpMatch(host, "*.ru") ||
    shExpMatch(host, "rabhost.local") ||
    shExpMatch(host, "*mail.ru") ||
    shExpMatch(host, "*uchi.ru")) {
      return "DIRECT";
  } else if (ygg_pattern.test(host)) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.i2p")) {
    return I2PD;
  } else if (shExpMatch(host, "*.onion")) {
    return TOR;
  } else {
    return TOR + "; DIRECT";
  };
}
