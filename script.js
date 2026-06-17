const sessions = [
  {
    id: "opening",
    time: "09:00-09:20",
    start: "09:00",
    track: "common",
    type: "event",
    title: "인사말",
    speaker: "Willy Cho",
    summary: "2026 MCAPS Tech Summit의 시작을 여는 오프닝 세션입니다.",
    details: "Build the future. Together. 하루 동안 진행될 주요 기술 세션과 트랙 흐름을 소개합니다."
  },
  {
    id: "a-01",
    time: "09:20-09:40",
    start: "09:20",
    track: "A",
    type: "session",
    title: "01. Durable Functions으로 구현하는 Agentic Workflow와 활용 사례",
    speaker: "Il Joong Kim",
    summary: "Agentic RAG 아키텍처에서 Azure Durable Functions를 멀티 에이전트 오케스트레이션 플랫폼으로 활용한 사례를 소개합니다.",
    details: "Agent 기술의 고도화와 함께 실행 시간이 길어지고 복잡성이 증가하면서, 안정적이고 확장 가능한 워크플로우 플랫폼의 중요성이 더욱 커지고 있습니다.\n\n삼성생명 재무심사 시장 리서치에 적용했던 Agentic RAG 아키텍처를 중심으로, 핵심 멀티 에이전트 오케스트레이션 서비스로 활용된 Azure Durable Functions의 역할과 구현 방안을 소개합니다. 또한 AGUI와 Agent Harness를 적용한 아키텍처 개선 방안을 제시합니다."
  },
  {
    id: "b-workshop",
    time: "09:20-13:40",
    start: "09:20",
    track: "B",
    type: "workshop",
    title: "GitHub Copilot으로 Harness Asset을 만들고 Harness Engineering을 경험하는 시간",
    speaker: "하네스톤",
    summary: "09:20부터 13:40까지 하나의 연속 워크숍으로 운영됩니다. 중간 입장 없이 흐름을 이어가며 Harness Asset 제작과 Harness Engineering을 경험합니다.",
    details: "트랙1 초급: 하네스를 활용한 앱 개발\n트랙2 심화: 하네스 어셋 개발\n\nTrack B는 오전 전체를 사용하는 연속 워크숍입니다. 단계별 실습 흐름이 이어지므로 중간 입장보다는 시작 시간부터 참여하는 것을 권장합니다.\n\n초급 트랙에서는 'GHCP 하네스로 개발하기' 테이블 클래스를 진행합니다. 참석은 자유롭습니다.\n\n점심 및 행사장 정리 시간이 포함됩니다."
  },
  {
    id: "a-02",
    time: "09:40-10:20",
    start: "09:40",
    track: "A",
    type: "session",
    title: "02. Azure AI Search vs AWS OpenSearch: 알아야 이긴다",
    speaker: "Jihye Seo, Jisun Choi",
    summary: "Azure AI Search와 AWS OpenSearch를 검색, 파이프라인, 보안, 비용, 운영 관점에서 비교합니다.",
    details: "Azure AI Search를 엔터프라이즈급 RAG 플랫폼으로 소개하며, AWS OpenSearch와 6대 영역인 검색 성능, 데이터 파이프라인, Agent 오케스트레이션, 보안, 사이징/비용, 운영 모니터링을 코드, 표, 벤치마크로 비교하는 L300-L400 수준의 기술 발표입니다.\n\n실제 18만 건의 법률 데이터를 적재하고, LLM 기반 Planning + Evaluation(Foundry IQ)이 결합된 Agentic Retrieval 구현 사례까지 함께 시연합니다."
  },
  {
    id: "a-03",
    time: "10:20-10:40",
    start: "10:20",
    track: "A",
    type: "session",
    title: "03. 에이전트는 거짓말하지 않는다. 단지, 너무 그럴듯하게 틀릴 뿐이다.",
    speaker: "Changju Ahn",
    summary: "에이전트 응답 평가에서 놓치기 쉬운 함정과 고객 사례 기반의 레슨런을 공유합니다.",
    details: "에이전트는 사람처럼 의도적으로 거짓말하지 않지만, 더 위험한 방식으로 틀릴 수 있습니다. 데모에서는 잘 됐지만 실제 업무에서는 못 쓰는 답변이 되는 이유를 다룹니다.\n\n답변을 잘 생성하는 것과, 그 답변이 업무적으로 신뢰 가능한 것은 완전히 다른 문제입니다. 고객 사례를 바탕으로 에이전트 응답 평가에서 놓치기 쉬운 함정과 레슨런을 공유합니다."
  },
  {
    id: "a-04",
    time: "10:40-11:00",
    start: "10:40",
    track: "A",
    type: "session",
    title: "04. AI Model Lifecycle - GenAIOps for LLM Migration",
    speaker: "Daeun Go",
    summary: "삼성증권 프로덕션 환경에서 검증된 AI 모델 전환 사례와 GenAIOps 운영 전략을 소개합니다.",
    details: "삼성증권 프로덕션 환경에서 검증된 AI 모델 전환 사례를 기반으로 Evaluation, 프롬프트 최적화, Latency, 배포까지 실제 운영에서 마주한 핵심 이슈와 해결 패턴을 짚습니다.\n\nGenAIOps 관점에서 서비스 중단 없이 모델을 교체하고 성능과 품질을 유지한 운영 전략을 압축적으로 제시합니다."
  },
  {
    id: "break-1",
    time: "11:00-11:20",
    start: "11:00",
    track: "A",
    type: "break",
    title: "Break (Track A)",
    speaker: "",
    summary: "Track A 휴식 및 다음 세션 이동 시간입니다. Track B 워크숍은 계속 진행됩니다.",
    details: ""
  },
  {
    id: "a-05",
    time: "11:20-11:40",
    start: "11:20",
    track: "A",
    type: "session",
    title: "05. Foundry Agent 실전 설계 경험기",
    speaker: "Kichul Kim",
    summary: "제조 고객 대상 3개 PoC를 통해 Foundry 기반 Agentic AI 설계와 적용 인사이트를 공유합니다.",
    details: "제조 고객을 대상으로 진행한 3가지 PoC 사례를 중심으로 Foundry 기반 Agentic AI를 실제 업무 시나리오에 어떻게 설계하고 적용했는지 공유합니다.\n\n이미지 모델을 활용한 고품질 SVG 아이콘 생성, WorkIQ와 MCP 기반 데이터베이스 연동을 통한 데이터 처리 및 리포트/메일 자동화, PDF 기반 구매 목표가 산정 에이전트의 M365 Copilot 배포까지 서로 다른 유형의 Agentic AI 적용 사례를 살펴봅니다."
  },
  {
    id: "a-06",
    time: "11:40-12:00",
    start: "11:40",
    track: "A",
    type: "session",
    title: "06. Voice 프로덕트 적용기",
    speaker: "Minji Sung",
    summary: "AI 디바이스와 스마트 가전 환경에서 TTS를 적용하며 겪은 문제와 경험을 공유합니다.",
    details: "LG전자에서의 Voice 프로덕트 적용 사례를 다룹니다. LLM 기반 AI Agent 확산으로 Voice UX가 다시 핵심 인터페이스로 주목받고 있습니다.\n\n실제 AI 디바이스 및 스마트 가전 환경에서 TTS를 적용하며 겪었던 문제와 경험을 공유합니다."
  },
  {
    id: "a-07",
    time: "12:00-12:20",
    start: "12:00",
    track: "A",
    type: "session",
    title: "07. 고객 사례로 알아보는 Agentic Engineering과 코딩 에이전트의 미래",
    speaker: "Hyungil Kim",
    summary: "고객의 코딩 에이전트 구축 여정을 통해 Agentic Engineering과 멀티 에이전트 아키텍처를 전망합니다.",
    details: "고객의 코딩 에이전트 구축 여정을 통해 Agentic Engineering과 멀티 에이전트 아키텍처를 알아보고, AI 에이전트가 만들어갈 소프트웨어의 미래를 함께 전망합니다."
  },
  {
    id: "a-08",
    time: "12:20-12:40",
    start: "12:20",
    track: "A",
    type: "session",
    title: "08. 장애는 짧게, 인사이트는 깊게, Azure SRE Agent로 그려보는 운영의 미래",
    speaker: "Jung-Hun Ha",
    summary: "Azure SRE Agent를 활용해 장애 분석, 완화 조치, 지식 등록, 모니터링 자동화를 시연합니다.",
    details: "장애 분석, 완화 조치, 완료 확인, Knowledge 등록과 이후 Scheduled Task를 이용한 모니터링을 Azure SRE Agent로 자동화하는 흐름을 시연합니다."
  },
  {
    id: "a-foundry-iq",
    time: "12:40-13:00",
    start: "12:40",
    track: "A",
    type: "session",
    title: "Foundry IQ as Composition Layer",
    speaker: "Hyeonsang Jeon",
    summary: "Fabric IQ Knowledge Source의 AI Search 백본 구조와 적용 패턴을 설명합니다.",
    details: "정형과 비정형 데이터가 분리된 환경에서 RAG가 만들어내는 구조적 통점을 출발점으로, Foundry IQ를 composition layer로 보는 framing 위에서 두 가지 Live Knowledge Source인 Fabric Ontology KS와 MCP Server KS를 하나의 Knowledge Base로 묶는 백본 구조를 다룹니다.\n\nFabric 온톨로지 시맨틱 레이어, multi-KS query fan-out, hybrid retrieval, retrieval trace 해석, Field Feedback 검증 결과, 인덱스 설계 시 주의점을 공유하고 Semantic JOIN live demo로 마무리합니다."
  },
  {
    id: "lunch",
    time: "13:00-14:00",
    start: "13:00",
    track: "common",
    type: "meal",
    title: "점심식사",
    speaker: "",
    summary: "점심식사 및 오후 세션 준비 시간입니다.",
    details: ""
  },
  {
    id: "a-09",
    time: "14:00-14:40",
    start: "14:00",
    track: "A",
    type: "partner",
    title: "09. Decision to Actions: 온톨로지와 Computer Use를 통한 의사 결정 가속화 프로세스",
    speaker: "Enhans : 김도균",
    summary: "대용량 데이터에서 의미를 발견하고 의사결정과 실행으로 연결하는 과정을 소개합니다.",
    details: "기업 내 다양하고 복잡한 데이터로부터 의미를 발견하고, 이를 의사결정과 실행으로 연결하는 과정을 가속화/자동화하려는 수요가 빠르게 커지고 있습니다.\n\nAzure Infrastructure 위에서 대용량 데이터를 다루는 인핸스의 Ontology와 Computer Use 기술을 소개하고, 커머스 도메인의 데이터에서 의미를 추출해 의사결정을 내리고 실제 액션으로 실행하기까지의 과정을 다룹니다."
  },
  {
    id: "b-01",
    time: "14:00-14:40",
    start: "14:00",
    track: "B",
    type: "partner",
    title: "01. 기업의 AI 활용 기반을 지원하는 Databricks 경쟁력 소개",
    speaker: "Databricks : 박상원",
    summary: "Databricks 도입을 통해 데이터와 AI를 비즈니스 성과로 연결한 사례를 소개합니다.",
    details: "Databricks 도입을 통해 데이터 사일로 해소, 실시간 분석, AI 기반 의사결정 등 기업의 핵심 문제를 해결한 고객 사례를 소개합니다.\n\n다양한 산업에서 검증된 대규모 ADB 활용 사례와 함께 성능, 비용, 거버넌스를 최적화하는 베스트 프랙티스를 공유합니다."
  },
  {
    id: "a-10",
    time: "14:40-15:20",
    start: "14:40",
    track: "A",
    type: "session",
    title: "10. Ontology로 완성하는 AI-ready Data",
    speaker: "Jeonghoon Lee",
    summary: "Microsoft Fabric 위에서 AI가 추론 가능한 데이터 구조를 만드는 전략을 공유합니다.",
    details: "RAG와 문서 벡터화 중심의 AI 활용이 주목받고 있지만, 기업의 핵심 데이터는 여전히 정형 기간계 안에 있습니다. 데이터가 있다는 것과 AI가 추론할 수 있다는 것은 다른 문제입니다.\n\nKT에서 수행 중인 프로젝트 사례를 바탕으로 Microsoft Fabric 위에서 AI가 실제로 추론할 수 있는 데이터 구조를 만드는 과정을 공유합니다. Lakehouse 기반 Medallion 데이터 구성, Data Agent 설정과 instruction 작성, 평가와 신뢰성 확보 고려사항을 실전 경험 중심으로 살펴봅니다."
  },
  {
    id: "b-02",
    time: "14:40-15:00",
    start: "14:40",
    track: "B",
    type: "session",
    title: "02. Microsoft Entra PIM 기반 권한관리 체계 설계와 운영 정착",
    speaker: "Jin Heon Lee",
    summary: "KT 고객사의 PIM 도입 사례를 바탕으로 권한관리 운영 프로세스 정착 방안을 공유합니다.",
    details: "KT 고객사의 PIM 도입 사례를 바탕으로 권한 신청, 승인, 활성화, 감사로 이어지는 운영 프로세스를 어떻게 설계하고 정착시켰는지 공유합니다.\n\n도입 과정에서 마주한 시행착오, 현업과 보안 조직 간 조율 포인트, 파일럿에서 운영 전환 시 발생한 저항 요인, 이를 해결하기 위한 현실적인 접근 방법을 중심으로 설명합니다."
  },
  {
    id: "b-03",
    time: "15:00-15:20",
    start: "15:00",
    track: "B",
    type: "session",
    title: "03. Azure GWLB의 경계를 넘다: 금융권 Landing Zone 보안 설계 전략",
    speaker: "Seo-an Son",
    summary: "금융권 랜딩존 설계 과정에서 GWLB 한계를 Internal LB와 UDR로 해결한 전략을 다룹니다.",
    details: "카카오뱅크, 한화손보 고객사의 랜딩존 설계 과정에서 Public Load Balancer with GWLB IPS 아키텍처의 구조적 한계를 다룹니다.\n\nInternal Load Balancer와 UDR을 통한 구조 설계 전략을 소개합니다."
  },
  {
    id: "a-11",
    time: "15:20-15:40",
    start: "15:20",
    track: "A",
    type: "session",
    title: "11. Samsung Electronics - UrecA 2.0 Journey",
    speaker: "Pyungrae Cho",
    summary: "삼성전자 UrecA 2.0 프로젝트의 도전 과제와 실행 사례를 공유합니다.",
    details: "삼성전자에서 FY26 Azure 프로젝트 중 가장 핵심인 UrecA(Unified Recommendation Agent) 2.0의 경험을 공유합니다.\n\n이 과정에서 마주한 주요 도전 과제와 이를 극복하기 위한 전략 및 실행 사례를 중심으로 인사이트를 소개합니다."
  },
  {
    id: "b-04",
    time: "15:20-15:40",
    start: "15:20",
    track: "B",
    type: "session",
    title: "04. Microsoft Fabric Security와 한국 고객의 보안 Requirement GAP",
    speaker: "Eun Ho Kim",
    summary: "한국 고객의 Fabric Security 요구사항과 실제 사용 유형에서의 GAP을 다룹니다.",
    details: "Microsoft Fabric Security와 한국 고객의 보안 Requirement GAP을 Power BI 제외, Fabric 실제 사용 유형(Data Engineering) 중심으로 살펴봅니다."
  },
  {
    id: "break-2",
    time: "15:40-16:00",
    start: "15:40",
    track: "common",
    type: "break",
    title: "Break",
    speaker: "",
    summary: "휴식 및 다음 세션 이동 시간입니다.",
    details: ""
  },
  {
    id: "a-12",
    time: "16:00-16:20",
    start: "16:00",
    track: "A",
    type: "session",
    title: "12. Azure HPC Pack 기반 Windows/Linux 워크로드 BMT 사례",
    speaker: "Boram Jeong",
    summary: "Azure HPC Pack 기반 워크로드 BMT 사례와 성능 최적화 구성을 공유합니다.",
    details: "삼성증권 상품평가 시스템 고도화 프로젝트 수주 과정에서 Azure HPC Pack 기반 워크로드 3주간 BMT 사례를 공유합니다.\n\nH시리즈 성능 테스트 결과, Windows/Linux 이미지에 따른 성능 차이, HPC 워크로드 최적화 구성안을 중심으로 Azure HPC Pack 로드맵도 짧게 공유합니다."
  },
  {
    id: "b-05",
    time: "16:00-16:20",
    start: "16:00",
    track: "B",
    type: "session",
    title: "05. 금융권에서 GitHub 200% 활용하기",
    speaker: "Haewon Shin",
    summary: "금융권과 폐쇄망 환경에서도 GitHub와 Copilot CLI 기능을 최대한 활용하는 방법을 소개합니다.",
    details: "GitHub에서 제공하는 여러 제품과 기능을 금융권을 포함한 폐쇄망에서도 최대한 활용할 수 있는 방법을 살펴봅니다.\n\nCopilot CLI를 활용해서 GHCP, Cloud Agent 등의 기능을 활용할 수 있는 방법을 소개합니다."
  },
  {
    id: "a-13",
    time: "16:20-16:40",
    start: "16:20",
    track: "A",
    type: "session",
    title: "13. LG전자 ThinQ 1.0 마이그레이션의 MySQL 동기화 지연이슈 지원사례",
    speaker: "Yong Seon Kim",
    summary: "AWS에서 Azure로 전환하는 과정의 MySQL HA 복제 지연 이슈와 해결 과정을 공유합니다.",
    details: "LG전자 ThinQ 1.0의 AWS to Azure 전환 과정에서 발생한 Azure Database for MySQL Flexible Server HA 복제 지연 사례를 중심으로, 글로벌 서비스 마이그레이션이 단순 이전이 아니라 아키텍처와 운영 모델을 다시 설계하는 문제였음을 설명합니다.\n\n대용량 트랜잭션, Passive 노드 지연 Commit, PK 부재 및 대량 FK 등의 이슈를 CSS/SE/제품그룹 협업을 통해 해소한 과정과 고객 신뢰 회복 과정을 공유합니다."
  },
  {
    id: "b-06",
    time: "16:20-16:40",
    start: "16:20",
    track: "B",
    type: "session",
    title: "06. Copilot 분석, 왜 기본 Dashboard로는 부족할까?",
    speaker: "Youngtaek Ahn, Kevin Jung",
    summary: "Copilot Dashboard의 한계와 Power BI + Copilot Cowork 기반 대안 아키텍처를 설명합니다.",
    details: "한국 고객이 느끼는 Copilot Dashboard의 한계와 실제 피드백을 정리합니다.\n\nPower BI + Copilot Cowork를 활용한 현실적인 대안 아키텍처와 고객 사례 기반의 효과적인 Copilot 분석 전략을 공유합니다."
  },
  {
    id: "a-14",
    time: "16:40-17:00",
    start: "16:40",
    track: "A",
    type: "session",
    title: "14. Azure Data Explorer 고객 사례 (KT AIONET)",
    speaker: "Wonsung So, Heejae Noh",
    summary: "KT 네트워크 라우터 로그 기반 이상 탐지 시스템을 Azure Data Explorer 중심으로 구축한 사례입니다.",
    details: "KT의 네트워크 라우터 로그 기반 이상 탐지 시스템을 Azure에 구축한 사례를 소개합니다.\n\nAzure Data Explorer 중심 아키텍처(Event Hub, AKS 포함)와 구현 내용, 향후 확장 방향을 간략히 공유합니다."
  },
  {
    id: "b-07",
    time: "16:40-17:00",
    start: "16:40",
    track: "B",
    type: "session",
    title: "07. 금융규제환경에서 SaaS가 살아남는 방법",
    speaker: "Jin Woo Kim",
    summary: "엄격한 금융규제 안에서 Microsoft 365와 Power Platform 같은 SaaS를 판매하는 방식을 공유합니다.",
    details: "엄격한 금융규제 내에서 금융 고객을 대상으로 Microsoft 365, Power Platform과 같은 SaaS 서비스를 어떤 방식으로 판매하고 있는지 공유합니다."
  },
  {
    id: "a-15",
    time: "17:00-17:20",
    start: "17:00",
    track: "A",
    type: "session",
    title: "15. 고객으로부터 '항상 우리가 문제를 먼저 이야기해야 하나요?'라는 이야기를 듣지 않는 길",
    speaker: "Seungjoo Baek",
    summary: "한국 게임 팀이 고객 인프라를 선제적으로 모니터링하고 대응하는 방안을 소개합니다.",
    details: "고객의 인프라에 대한 모니터링 및 선제적 대응에 대해 실제 사용 가능하고 현재 진행 중인 기술 방안과 스토리를 전달합니다."
  },
  {
    id: "b-08",
    time: "17:00-17:20",
    start: "17:00",
    track: "B",
    type: "session",
    title: "08. Agent Governance Framework 살펴보기",
    speaker: "Seukhyun Ha",
    summary: "Agent Governance의 전체 프로세스와 Microsoft 솔루션 매핑을 제시합니다.",
    details: "많은 기업들이 Agent Governance 부재로 Agent 확산에 어려움을 겪고 있습니다.\n\n단순 Governance 필요 영역 나열이 아니라 전체 프로세스와 순서, 활용 가능한 Microsoft 솔루션을 매핑하여 Agent Governance의 큰 그림을 제시합니다. Agent 도입 가속화와 비즈니스 기회 확장을 목표로 합니다."
  },
  {
    id: "a-16",
    time: "17:20-17:40",
    start: "17:20",
    track: "A",
    type: "session",
    title: "16. GenAIOps on Azure: AKS + OpenTelemetry 실전 Observability",
    speaker: "Inhwan Hwang",
    summary: "OpenTelemetry 기반으로 Azure에서 GenAI 워크로드 Observability를 설계하고 전환하는 방법을 소개합니다.",
    details: "많은 조직이 외부 SaaS 또는 오픈소스 기반 모니터링을 사용하고 있지만 비용, 데이터 전송, 운영 복잡성에 대한 고민이 커지고 있습니다. GenAI 워크로드에서는 새로운 Observability 요구가 발생합니다.\n\nAKS 환경을 중심으로 Metrics, Logs, Traces 수집, Grafana, Azure Monitor를 활용한 아키텍처와 GenAIOps 운영 패턴을 실전 사례와 함께 다룹니다."
  },
  {
    id: "b-09",
    time: "17:20-17:40",
    start: "17:20",
    track: "B",
    type: "session",
    title: "09. 현대자동차 Zero Trust 기반 보안 접근 혁신 PoC 사례",
    speaker: "Young Shik Shin",
    summary: "ZTNA 도입 배경, Zero Trust 접근 모델, 적용 시나리오와 확산 방향을 공유합니다.",
    details: "ZTNA 도입 배경과 보안 과제, Zero Trust 접근 모델 및 핵심 원칙, ZTNA 아키텍처와 적용 시나리오를 다룹니다.\n\n사용자, 디바이스, 앱 접근 제어 방식과 성과, Lessons Learned 및 확산 방향을 공유합니다."
  },
  {
    id: "lucky-draw",
    time: "17:40-18:00",
    start: "17:40",
    track: "common",
    type: "event",
    title: "Lucky Draw",
    speaker: "",
    summary: "행사 마무리 경품 추첨 시간입니다.",
    details: ""
  },
  {
    id: "dinner-move",
    time: "18:00-18:20",
    start: "18:00",
    track: "common",
    type: "meal",
    title: "식사 장소 이동",
    speaker: "",
    summary: "저녁식사 장소로 이동합니다.",
    details: ""
  },
  {
    id: "dinner",
    time: "18:20-22:00",
    start: "18:20",
    track: "common",
    type: "meal",
    title: "저녁식사",
    speaker: "",
    summary: "네트워킹과 저녁식사 시간입니다.",
    details: ""
  }
];

const trackLabels = {
  A: "Track A",
  B: "Track B",
  common: "공통"
};

const typeLabels = {
  session: "Session",
  workshop: "Workshop",
  partner: "Partner",
  break: "Break",
  meal: "Meal",
  event: "Event"
};

let activeTrack = "all";

const EVENT_DATE = "2026-06-29";
const agendaList = document.querySelector("#agenda-list");
const resultCount = document.querySelector("#result-count");
const searchInput = document.querySelector("#session-search");
const filterButtons = document.querySelectorAll(".filter-button");
const currentSessionButton = document.querySelector("#current-session-button");

function minutes(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function clock(totalMinutes) {
  const hour = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const minute = String(totalMinutes % 60).padStart(2, "0");
  return `${hour}:${minute}`;
}

function timeRange(value) {
  const [start, end] = value.split("-").map((part) => part.trim());
  return { start: minutes(start), end: minutes(end) };
}

function sessionDuration(session) {
  const range = timeRange(session.time);
  return range.end - range.start;
}

function isSpanningSession(session) {
  return session.track !== "common" && sessionDuration(session) >= 40;
}

function isExtendedSession(session) {
  return session.track !== "common" && sessionDuration(session) >= 60;
}

function overlaps(range, slotRange) {
  return range.start < slotRange.end && range.end > slotRange.start;
}

function startsInSlot(range, slotRange) {
  return range.start === slotRange.start;
}

function isEventDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}` === EVENT_DATE;
}

function currentMinutes(date = new Date()) {
  return date.getHours() * 60 + date.getMinutes();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function searchable(session) {
  return [
    session.time,
    trackLabels[session.track],
    typeLabels[session.type],
    session.title,
    session.speaker,
    session.summary,
    session.details
  ].join(" ").toLocaleLowerCase("ko-KR");
}

function matchesTrack(session) {
  if (activeTrack === "all") return true;
  return session.track === activeTrack || session.track === "common";
}

function matchesSearch(session, query) {
  if (!query) return true;
  return searchable(session).includes(query);
}

function detailHtml(details) {
  if (!details) return "";
  const paragraphs = details
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("");

  return `
    <div class="session-details">
      <button class="details-toggle" type="button" aria-expanded="false">세션 상세 보기</button>
      <div class="details-body" hidden>${paragraphs}</div>
    </div>
  `;
}

function sessionCard(session, index) {
  const modifier = `session-card--${session.track}`;
  const typeModifier = `session-card--${session.type}`;
  const spanModifier = isSpanningSession(session) ? "session-card--span" : "";
  const longModifier = isExtendedSession(session) ? "session-card--long" : "";
  const speaker = session.speaker ? `<p class="speaker">▶ ${escapeHtml(session.speaker)}</p>` : "";
  const spanLabel = isSpanningSession(session)
    ? `<span class="pill pill--accent">${isExtendedSession(session) ? "오전 통합 · 중간 입장 없음" : `${sessionDuration(session)}분 세션`}</span>`
    : "";
  const longTimeline = isSpanningSession(session)
    ? `<div class="long-timeline" aria-hidden="true"><span>${escapeHtml(session.time.slice(0, 5))}</span><strong></strong><span>${escapeHtml(session.time.slice(-5))}</span></div>`
    : "";
  const entryNote = isExtendedSession(session)
    ? `<p class="entry-note">연속 워크숍으로 운영되어 시작 시간부터 참여하는 세션입니다.</p>`
    : "";

  return `
    <article class="session-card ${modifier} ${typeModifier} ${spanModifier} ${longModifier}" style="--delay: ${Math.min(index * 18, 240)}ms">
      <div class="session-card__meta">
        <span class="pill">${escapeHtml(trackLabels[session.track])}</span>
        <span class="pill">${escapeHtml(typeLabels[session.type])}</span>
        <span class="pill">${escapeHtml(session.time)}</span>
        ${spanLabel}
      </div>
      <h3>${escapeHtml(session.title)}</h3>
      ${speaker}
      <p class="summary">${escapeHtml(session.summary)}</p>
      ${entryNote}
      ${longTimeline}
      ${detailHtml(session.details)}
    </article>
  `;
}

function continuationCard(session, slot) {
  const isLocked = isExtendedSession(session);
  const label = isLocked ? "연속 워크숍 · 중간 입장 없음" : `${sessionDuration(session)}분 세션`;
  return `
    <div class="continuation-card ${isLocked ? "continuation-card--locked" : ""}" aria-label="${escapeHtml(session.title)} ${escapeHtml(slot)} 진행 중">
      <span>${escapeHtml(trackLabels[session.track])} ${isLocked ? "연속 진행" : "진행 중"}</span>
      <strong>${escapeHtml(session.title)}</strong>
      <small>${escapeHtml(session.time)} · ${escapeHtml(label)}</small>
    </div>
  `;
}

function trackColumnMarkup(track, slotSessions, activeLongSessions, slotRange, cardIndex) {
  const normalCards = slotSessions
    .filter((session) => session.track === track)
    .map((session) => sessionCard(session, cardIndex.next++))
    .join("");
  const longCards = activeLongSessions
    .filter((session) => session.track === track)
    .map((session) => {
      const range = timeRange(session.time);
      return startsInSlot(range, slotRange)
        ? sessionCard(session, cardIndex.next++)
        : continuationCard(session, `${clock(slotRange.start)}-${clock(slotRange.end)}`);
    })
    .join("");

  if (!normalCards && !longCards && activeTrack !== "all") {
    return "";
  }

  return `<div class="track-column track-column--${track}">${normalCards}${longCards}</div>`;
}

function slotMarkup(slot, filteredSessions, indexOffset) {
  const slotRange = timeRange(slot);
  const slotSessions = filteredSessions.filter((session) => !isSpanningSession(session) && session.time === slot);
  const activeLongSessions = filteredSessions
    .filter(isSpanningSession)
    .filter((session) => overlaps(timeRange(session.time), slotRange));
  const common = slotSessions.filter((session) => session.track === "common");
  let cardIndex = indexOffset;
  const counter = { next: cardIndex };
  const trackColumns = activeTrack === "A"
    ? [trackColumnMarkup("A", slotSessions, activeLongSessions, slotRange, counter)]
    : activeTrack === "B"
      ? [trackColumnMarkup("B", slotSessions, activeLongSessions, slotRange, counter)]
      : [
          trackColumnMarkup("A", slotSessions, activeLongSessions, slotRange, counter),
          trackColumnMarkup("B", slotSessions, activeLongSessions, slotRange, counter)
        ];

  const commonMarkup = common.map((session) => sessionCard(session, counter.next++)).join("");
  const trackMarkup = trackColumns
    .filter(Boolean)
    .join("");
  const itemCount = slotSessions.length + activeLongSessions.length;

  return `
    <section class="time-row" data-start="${slotRange.start}" data-end="${slotRange.end}" tabindex="-1" aria-label="${escapeHtml(slot)} 일정">
      <div class="time-stamp">
        <time>${escapeHtml(slot)}</time>
        <span>${itemCount} item${itemCount > 1 ? "s" : ""}</span>
      </div>
      <div class="slot-content">
        ${commonMarkup}
        ${trackMarkup ? `<div class="track-grid ${activeTrack === "all" ? "" : "is-single"}">${trackMarkup}</div>` : ""}
      </div>
    </section>
  `;
}

function buildSlots(filteredSessions) {
  const baseSessions = filteredSessions.filter((session) => !isSpanningSession(session));
  const slots = new Set(baseSessions.map((session) => session.time));
  const baseRanges = baseSessions.map((session) => timeRange(session.time));

  filteredSessions.filter(isSpanningSession).forEach((session) => {
    const range = timeRange(session.time);
    for (let start = range.start; start < range.end; start += 20) {
      const end = Math.min(start + 20, range.end);
      const isCovered = baseRanges.some((baseRange) => baseRange.start <= start && baseRange.end > start);
      if (!isCovered) {
        slots.add(`${clock(start)}-${clock(end)}`);
      }
    }
  });

  return [...slots].sort((a, b) => timeRange(a).start - timeRange(b).start || timeRange(a).end - timeRange(b).end);
}

function setActiveTrack(track) {
  activeTrack = track;
  filterButtons.forEach((item) => {
    const isActive = item.dataset.track === track;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
}

function renderAgenda() {
  const query = searchInput.value.trim().toLocaleLowerCase("ko-KR");
  const filteredSessions = sessions
    .filter((session) => matchesTrack(session))
    .filter((session) => matchesSearch(session, query))
    .sort((a, b) => minutes(a.start) - minutes(b.start));

  const slots = buildSlots(filteredSessions);

  if (filteredSessions.length === 0) {
    agendaList.innerHTML = `<div class="empty-state">검색 조건에 맞는 세션이 없습니다.</div>`;
    resultCount.textContent = "표시할 세션이 없습니다.";
    return;
  }

  let indexOffset = 0;
  agendaList.innerHTML = slots.map((slot) => {
    const markup = slotMarkup(slot, filteredSessions, indexOffset);
    indexOffset += filteredSessions.filter((session) => session.time === slot).length;
    return markup;
  }).join("");
  bindDetailsToggles();

  const sessionCount = filteredSessions.filter((session) => ["session", "workshop", "partner"].includes(session.type)).length;
  const trackLabel = activeTrack === "all" ? "전체" : trackLabels[activeTrack];
  resultCount.textContent = `${trackLabel} 기준 ${sessionCount}개 세션을 표시 중입니다.`;
}

function bindDetailsToggles() {
  agendaList.querySelectorAll(".details-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isExpanded));
      button.textContent = isExpanded ? "세션 상세 보기" : "세션 상세 닫기";
      panel.hidden = isExpanded;
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveTrack(button.dataset.track);
    renderAgenda();
  });
});

searchInput.addEventListener("input", renderAgenda);

function findCurrentRow(now = new Date()) {
  if (!isEventDate(now)) return null;
  const nowMinutes = currentMinutes(now);
  return [...agendaList.querySelectorAll(".time-row")].find((row) => (
    Number(row.dataset.start) <= nowMinutes && nowMinutes < Number(row.dataset.end)
  )) ?? null;
}

function focusCurrentSession(now = new Date()) {
  setActiveTrack("all");
  searchInput.value = "";
  renderAgenda();

  requestAnimationFrame(() => {
    agendaList.querySelectorAll(".time-row.is-current").forEach((row) => row.classList.remove("is-current"));
    const row = findCurrentRow(now);
    if (!row) {
      document.querySelector("#agenda")?.scrollIntoView({ behavior: "smooth", block: "start" });
      resultCount.textContent = "현재 진행 중인 세션이 없습니다. 전체 일정을 표시합니다.";
      return;
    }

    row.classList.add("is-current");
    row.scrollIntoView({ behavior: "smooth", block: "center" });
    row.focus({ preventScroll: true });
    resultCount.textContent = `${row.querySelector("time")?.textContent ?? ""} 현재 진행 중인 세션으로 이동했습니다.`;
  });
}

currentSessionButton?.addEventListener("click", () => focusCurrentSession());

async function initializeQrCode() {
  const image = document.querySelector(".qr-card img");
  const placeholder = document.querySelector(".qr-placeholder");
  const urlLink = document.querySelector(".site-url");
  const source = image?.dataset.src;

  if (urlLink && window.MCAPS_SITE_URL) {
    urlLink.href = window.MCAPS_SITE_URL;
    urlLink.textContent = window.MCAPS_SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }

  if (!image || !placeholder || !source || !window.location.protocol.startsWith("http")) {
    return;
  }

  image.src = source;
  image.addEventListener("load", () => {
    image.hidden = false;
    placeholder.hidden = true;
  }, { once: true });
}

renderAgenda();
if (window.MCAPS_QR_READY === true) {
  initializeQrCode();
}
