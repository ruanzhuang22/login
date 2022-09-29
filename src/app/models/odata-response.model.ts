import { JsonObject, JsonProperty, Any } from 'json2typescript';
/* eslint-disable @typescript-eslint/ban-types */

@JsonObject('ODataResponse')
export class ODataResponse {
  @JsonProperty('@odata.context', String, true)
  public context: String = undefined;

  @JsonProperty('@odata.etag', String, true)
  public etag: String = undefined;

  @JsonProperty('@odata.nextLink', String, true)
  public nextLink: String = undefined;

  @JsonProperty('@odata.count', Number, true)
  public count: number = undefined;

  @JsonProperty('value', Any, true)
  public value: any = undefined;
}
