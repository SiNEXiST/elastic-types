import { SpanNearQuery } from './span-near';
import { SpanTermQuery } from './span-term';

export interface SpanContainingQuery {
    span_containing: SpanContainingQueryOptions;
}

export interface SpanContainingQueryOptions {
    little: SpanTermQuery | SpanNearQuery;
    big: SpanTermQuery | SpanNearQuery;
}
