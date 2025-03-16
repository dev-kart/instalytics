import { NextRequest, NextResponse } from "next/server";

const LANGFLOW_URL = "https://api.langflow.astra.datastax.com/";
const FLOW_ID = process.env.FLOW_ID;
const GRAPH_ID = process.env.GRAPH_ID;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(
      `${LANGFLOW_URL}/lf/${FLOW_ID}/api/v1/run/${GRAPH_ID}?stream=false`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': request.headers.get('Authorization') || '',
        },
        body: JSON.stringify({
          input_value: body.message,
          output_type: "chat",
          input_type: "chat",
          tweaks: {
            "ChatOutput-IE6ZB": {},
            "ChatInput-9QCNU": {},
            "Prompt-nN4AV": {},
            "ParseData-Re1HY": {},
            "AstraDBToolComponent-OJH1D": {},
            "GoogleGenerativeAIModel-Ngh2g": {}
          }
        })
      }
    );

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
      headers: {
        'Access-Control-Allow-Origin': '',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}