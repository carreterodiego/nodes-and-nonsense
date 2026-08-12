// MOCK DEMO DATASET — placeholder content only, for showcasing the map format.
// None of these sources are real. Replace with real data once the spreadsheet is done.

export const RAW_NODES = [

  // ── History ──────────────────────────────────────────────────────────────

  { id: "mock-origin-1",  label: "[MOCK] Founding Paper on the Construct",     author: "Placeholder Author A", themes: ["history"],      weight: 9, desc: "Placeholder description. This mock entry stands in for the original paper that first named and defined the construct, before it was operationalised or measured.", url: "https://example.com/mock-1", date: "1985-01-01" },
  { id: "mock-origin-2",  label: "[MOCK] Early Field Study",                   author: "Placeholder Author B", themes: ["history"],      weight: 6, desc: "Placeholder description. Stands in for an early empirical test of the founding idea in a real-world setting, before the concept was widely adopted.", url: "https://example.com/mock-2", date: "1991-01-01" },

  // ── Measurement ──────────────────────────────────────────────────────────

  { id: "mock-measure-1", label: "[MOCK] The Standard Survey Instrument",      author: "Placeholder Author C", themes: ["measurement"], weight: 8, desc: "Placeholder description. Represents the paper that introduced the widely-used survey scale for measuring the construct across teams and organisations.", url: "https://example.com/mock-3", date: "1999-01-01" },
  { id: "mock-measure-2", label: "[MOCK] Critique of the Survey Approach",     author: "Placeholder Author D", themes: ["measurement"], weight: 5, desc: "Placeholder description. Stands in for a critical response arguing the standard survey misses important context and risks reducing people to a single score.", url: "https://example.com/mock-4", date: "2010-01-01" },

  // ── Disasters & systems ──────────────────────────────────────────────────

  { id: "mock-disaster-1",label: "[MOCK] Case Study of a Historic Failure",   author: "Placeholder Author E", themes: ["disasters"],   weight: 7, desc: "Placeholder description. Represents a case study of a well-known disaster, used to argue that failures come from systems, not individual blame.", url: "https://example.com/mock-5", date: "1990-01-01" },
  { id: "mock-disaster-2",label: "[MOCK] Systems Thinking Applied to Safety", author: "Placeholder Author F", themes: ["disasters"],   weight: 6, desc: "Placeholder description. Stands in for a paper applying systems theory to workplace safety, building directly on the disaster case study above.", url: "https://example.com/mock-6", date: "2002-01-01" },

  // ── Voice & power ─────────────────────────────────────────────────────────

  { id: "mock-voice-1",   label: "[MOCK] Power and Who Gets Heard",          author: "Placeholder Author G", themes: ["voice"],       weight: 7, desc: "Placeholder description. Represents a paper on how organisational power structures shape whose voice is heard and whose is systematically ignored.", url: "https://example.com/mock-7", date: "1995-01-01" },
  { id: "mock-voice-2",   label: "[MOCK] Evidence Against the Mainstream View", author: "Placeholder Author H", themes: ["voice"],    weight: 4, desc: "Placeholder description. Stands in for a counter-argument, included deliberately to show the map holds critical perspectives, not just supportive ones.", url: "https://example.com/mock-8", date: "2015-01-01" },

  // ── Complexity ────────────────────────────────────────────────────────────

  { id: "mock-complex-1", label: "[MOCK] Complexity Science Primer",         author: "Placeholder Author I", themes: ["complexity"],  weight: 6, desc: "Placeholder description. Represents a foundational complexity-science paper later borrowed by management theorists to explain organisational behaviour.", url: "https://example.com/mock-9", date: "1988-01-01" },
  { id: "mock-complex-2", label: "[MOCK] Applying Complexity to Teams",      author: "Placeholder Author J", themes: ["complexity"],  weight: 5, desc: "Placeholder description. Stands in for a later paper applying the complexity primer above directly to team dynamics and safety culture.", url: "https://example.com/mock-10", date: "2008-01-01" },

];
