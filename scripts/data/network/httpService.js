/**
 * Created by dannyyassine on 2017-03-05.
 */

class HttpService {

    constructor() {
        this.method = 'GET';
        this.url = "";
        this.body = {};
        this.httpRequest = new XMLHttpRequest();
    }

    URL(url) {
        this.url = url;
        return this;
    }

    addParameter(key, value) {
        this.body[key] = value;
        return self;
    }

    GET() {
        this.method = 'GET';
        return this;
    }

    POST() {
        this.method = 'POST';
        return this;
    }

    DELETE() {
        this.method = 'DELETE';
        return this;
    }

    PUT() {
        this.method = 'PUT';
        return this;
    }

    execute(success, error) {
        this.httpRequest.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                var json = JSON.parse(this.responseText);
                success(json);
            }
            if (this.readyState == XMLHttpRequest.DONE && this.status != 200) {
                var json = JSON.parse(this.responseText);
                error(json);
            }
        };
        var index = 0;
        for (var value in this.body) {
            if (index == 0) {
                this.url += `?${value}=${this.body[value]}`;
            } else {
                this.url += `&${value}=${this.body[value]}`;
            }
            index += 1;
        }
        this.httpRequest.open(this.method, this.url, true);
        this.httpRequest.send();
    }

}

export { HttpService };