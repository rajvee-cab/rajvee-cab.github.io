"""
Rajvee Cab - Automated Real-Time Search Console & Google Analytics 4 Reporter
"""
import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import RunReportRequest, DateRange, Metric, Dimension, OrderBy

KEY_PATH = os.path.join(os.path.dirname(__file__), '..', 'gcp-key.json')
SITE_URL = 'https://rajvee-cab.github.io/'
GA_PROPERTY = 'properties/453819688'

def get_search_console_report():
    creds = service_account.Credentials.from_service_account_file(
        KEY_PATH,
        scopes=['https://www.googleapis.com/auth/webmasters.readonly']
    )
    service = build('searchconsole', 'v1', credentials=creds)
    
    # Sitemaps
    sitemaps = service.sitemaps().list(siteUrl=SITE_URL).execute().get('sitemap', [])
    
    # Performance Queries
    q_body = {'startDate': '2026-09-25', 'endDate': '2026-10-22', 'dimensions': ['query'], 'rowLimit': 25}
    q_res = service.searchanalytics().query(siteUrl=SITE_URL, body=q_body).execute().get('rows', [])
    
    # Performance Pages
    p_body = {'startDate': '2026-09-25', 'endDate': '2026-10-22', 'dimensions': ['page'], 'rowLimit': 25}
    p_res = service.searchanalytics().query(siteUrl=SITE_URL, body=p_body).execute().get('rows', [])
    
    return {'sitemaps': sitemaps, 'queries': q_res, 'pages': p_res}

def get_ga4_report():
    client = BetaAnalyticsDataClient.from_service_account_file(KEY_PATH)
    
    # Overall Metrics
    req_overview = RunReportRequest(
        property=GA_PROPERTY,
        metrics=[Metric(name='activeUsers'), Metric(name='sessions'), Metric(name='screenPageViews')],
        date_ranges=[DateRange(start_date='30daysAgo', end_date='today')],
    )
    res_overview = client.run_report(req_overview)
    
    # Traffic Sources
    req_src = RunReportRequest(
        property=GA_PROPERTY,
        dimensions=[Dimension(name='sessionSourceMedium')],
        metrics=[Metric(name='activeUsers'), Metric(name='sessions'), Metric(name='screenPageViews')],
        date_ranges=[DateRange(start_date='30daysAgo', end_date='today')],
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name='sessions'), desc=True)]
    )
    res_src = client.run_report(req_src)
    
    # Top Pages
    req_pages = RunReportRequest(
        property=GA_PROPERTY,
        dimensions=[Dimension(name='pagePath')],
        metrics=[Metric(name='activeUsers'), Metric(name='screenPageViews')],
        date_ranges=[DateRange(start_date='30daysAgo', end_date='today')],
        order_bys=[OrderBy(metric=OrderBy.MetricOrderBy(metric_name='screenPageViews'), desc=True)]
    )
    res_pages = client.run_report(req_pages)
    
    return {'overview': res_overview, 'sources': res_src, 'pages': res_pages}

if __name__ == '__main__':
    sc = get_search_console_report()
    ga = get_ga4_report()
    print('SUCCESS')
