/**
 * Created by dannyyassine on 2017-03-05.
 */

class HttpService {

    constructor() {
        this.method = 'GET';
        this.url = "";
        this.httpRequest = new XMLHttpRequest();
    }

    URL(url) {
        this.url = url;
        return this;
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
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                success(json);
            }
            if (this.readyState == 4 && this.status != 200) {
                var json = JSON.parse(this.responseText);
                error(json);
            }
        };
        this.httpRequest.open(this.method, this.url, true);
        this.httpRequest.send();
    }

}

export { HttpService };