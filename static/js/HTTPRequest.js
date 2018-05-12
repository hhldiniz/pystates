class HTTPRequest
{
    constructor()
    {
        this.xmlHttpRequest = new XMLHttpRequest();
        this.host = "";
        this.port = "";
        this.data = {};
    }

    getXmlHttpRequestObject()
    {
        return this.xmlHttpRequest;
    }

    setHost(host)
    {
        this.host = host;
    }

    setPort(port)
    {
        this.port = port;
    }

    setData(data)
    {
        this.data = data;
    }

    openCon(method)
    {
        this.xmlHttpRequest.open(method, this.host,true);
    }

    sendRequest()
    {
        this.xmlHttpRequest.send(this.data);
    }
    setOnLoadCallback(callback)
    {
        this.xmlHttpRequest.onload = callback;
    }
}