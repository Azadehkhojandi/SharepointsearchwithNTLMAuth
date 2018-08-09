
import { SharepointSearchResult, SharepointSearchResultParsedItem } from '../interfaces/sharepointsearchresultinterface';

class sharepointsearchparser {
    private  pathindex=3;
    private  titleindex=6;

    parse(result: string) {
        var jsonObject: SharepointSearchResult = JSON.parse(result);
        if (jsonObject.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results) {
            let results = jsonObject.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
            let parsedresult: SharepointSearchResultParsedItem[] = [];
            for (let index = 0; index < results.length; index++) {
                let item = results[index];
                let parseditem = { Path: item.Cells.results[this.pathindex].Value, Title: item.Cells.results[this.titleindex].Value }
                parsedresult.push(parseditem);
            }
            return parsedresult;
        }
        else {
            console.log('invalid result');
            return [];
        }

    }
}

export { sharepointsearchparser }