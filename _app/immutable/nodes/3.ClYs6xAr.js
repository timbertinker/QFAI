import {
  s as Ff,
  n as Df,
  d as o,
  c as zf,
  e,
  o as Hf,
  p as t,
  q as u,
  u as Of,
  w as ir,
  f as a,
  g as n,
  v as hr,
  j as s,
  x as c,
  k as r,
  l,
  H as h,
} from "../chunks/DDUrsvEp.js";
import {
  S as Wf,
  i as Mf,
  d as $f,
  t as Qf,
  a as Uf,
  m as qf,
  c as Vf,
  b as Kf,
} from "../chunks/BmebJm60.js";
import { c as z } from "../chunks/CAg3U06Y.js";
import { F as Gf } from "../chunks/h2LOkUL1.js";
const p = {
    1: "https://cointelegraph.com/news/inscriptions-evm-frenzy-clogs-up-blockchains",
    2: "https://en.wikiquote.org/wiki/Donald_Knuth#Computer_Programming_as_an_Art_(1974)",
    3: "https://substrate.io/ecosystem/projects",
    4: "https://x.com/gavofyork/status/1270025498580656134",
    5: "https://parachains.info/auctions/polkadot",
    6: "https://github.com/koute/polkavm/blob/master/BENCHMARKS.md",
    7: "https://ieeexplore.ieee.org/document/9881809",
    8: "https://ieeexplore.ieee.org/document/10634421",
    9: "https://zkpass.gitbook.io/zkpass/overview/technical-whitepaper",
    10: "http://noiseprotocol.org",
    11: "https://eprint.iacr.org/2019/028.pdf",
    12: "https://webrtc.org/getting-started/peer-connections",
    13: "https://dablock.com/guides/learn-about-existential-deposit-keep-alive-transfers-on-polkadot",
    14: "https://decrypt.co/resources/merkle-trees-guide-explainer-blockchain",
    15: "https://www.digilol.net/blog/chainanalysis-malicious-xmr.html",
    16: "https://cryptoslate.com/metamask-blocks-ethereum-transactions-in-several-jurisdictions-citing-compliance-issues",
    17: "https://capnproto.org",
    18: "https://en.wikipedia.org/wiki/Multicast_DNS",
    19: "https://en.wikipedia.org/wiki/Universal_Plug_and_Play",
    20: "https://www.ietf.org/archive/id/draft-aumasson-blake3-00.html",
    21: "https://docs.substrate.io/reference/frame-pallets",
    22: "https://owasp.org/www-project-top-ten/2017/A8_2017-Insecure_Deserialization",
    23: "https://github.com/paritytech/parity-scale-codec",
    24: "https://github.com/subscan-explorer",
    25: "https://github.com/polkascan",
    26: "https://polkadot.js.org",
    27: "https://github.com/paritytech/helm-charts",
    28: "https://github.com/paritytech/substrate-api-sidecar",
    29: "https://github.com/ChainSafe/metamask-snap-polkadot",
    30: "https://github.com/smol-dot/smoldot",
    31: "https://doc.rust-lang.org/rustc/platform-support.html",
    32: "https://crdt.tech",
    33: "https://www.iroh.computer/docs/components/blobs",
  },
  Nd = {
    title: "Introducing Quantum Fusion Blockchain Network(QFN)",
    description: `This is the first introduction of the concepts underpinning the to-be-released
    Quantum Fusion Blockchain Network system, currently under development. While the preliminary
    research and theoretical foundations of this paper should be solid and sound, the usual
    “other80% of R&D work” still remains to be performed, so nothing written in the text below
    should be considered as final, not in theoretical computer science neither in the practical
    engineering sense.`,
  },
  Ld = {
    title: "qf.foundation team | September 2024",
    description: `It’s been 15 years since Bitcoin’s “Chancellor on brink
    of second bailout for banks” launch moment. In this time, no blockchain-powered
    dApp became mainstream. Even you, dear blockchain-savvy reader, don’t use
    any dApps daily. Meanwhile, Telegram, launched five years later, is nearing
    a billion users. Why is that, and what can be done to overturn the situation?
    We don’t believe it’s due to a lack of talented engineers — the blockchain space has
    consistently attracted the best of the best for the last decade. It’s not due to lack of
    effort — a new decentralized social network or digital identity platform launches, rebrands, pivots,
    and shuts down every month. And of course it’s not due to lack of funding in the field, we can
    just safely state that. What is stopping all those projects is a fundamental mismatch
    between what a typical blockchain offers and what application users learned
    to expect from their Web2 experiences.
    <br/>
    <br/>

    It’s not hard to name the reasons why: dApp UX can be best characterized
    as “death by a thousand papercuts.” If your transaction takes seconds to get onchain — no
    real-time collaboration or games for you. If you need to spend non-negligible
    amounts of money for posting those transactions — no social. If your chain can’t process
    even a thousand transactions per second without stalling1 — how are you going to serve a million
    customers simultaneously?
    <br/>
    <br/>
 
    Nothing we ask here is too crazy; nothing requires breakthroughs in computer
    science or order of magnitude faster CPUs. Still, blockchains are stuck at “seconds per
    block” times, “hundreds of tps” throughput, node designs favoring datacenter deployments
    (resulting in the emergence of a ridiculously centralized layer of “RPC providers”), 
    sticking to HTML+JavaScript as the only option for dApp builders, and an overall lack of care
    when it comes to supporting modern, responsive, native-first, real-time applications.
    Can we achieve 0.1 sec block times, process 10× transactions per second, wrap that into
    a native-first SDK with batteries included — all without sacrifiing decentralization or requiring
    top-tier server hardware to even run a node? If we would, the dApps experience would be drastically
    different.And indeed we can. Meet the Quantum Fusion Blockchain Network.
    
`,
  },
  ol = {
    title: "Tunneling over the dApp gap",
    descriptionFirst: `How are we going to do this? With the power of 
    friendship and a bit of systems engineering, of course! <br/>
    Blockchains are multi-tiered systems; they are pretty novel as well.
    Ever heard “premature optimization is the root of all evil in programming”? It is absolutely,
    1000% applicable to the current state of the art blockchain development: system levels
    of the stack fall apart, each optimized away from the other by engineers who don’t focus
    on the bigger picture.
`,
    picture: "/litepaper/tunneling.png",
    descriptionSecond: `Yeah, you’ve made your networking stack incredibly modular, all
    while reducing the performance overhead of such modularity by 80% — great achievement that will
    keep your GitHub full of stars for years. But maybe the final product doesn’t need that
    modularity? Maybe your dApp users will only ever connect to your blockchain from their web
    browsers, and supporting Tor as a transport may only add unwanted configuration options for
    the developers of those dApps to be anxious about?
    We claim that a competent engineering team can achieve 10×,
    and maybe even 100× improvements over the status quo. They can do this by
    choosing the right building blocks, removing overheads and unnecessary abstraction layers,
    while keeping an obsessive, laser-eyed focus on the end goal: the world’s first dApp blockchain
    which doesn’t suck.
    In this paper, we describe our systematic review of a modern blockchain framework’s
    stack layers, the most feasible optimizations, and how each change will bring us closer
    to our goal: the world’s first blockchain ready for mainstream, mass-adopted decentralized applications.
`,
  },
  Fd = {
    title: "Building on Substrate framework",
    description: `Our optimization journey needs to start somewhere. And by
    “somewhere” we mean the best blockchain-building toolkit currently available, because
    to advance the state of the art, one needs to start from one. <br/>
    Substrate is modern, modular, and written in Rust (perfect for our heavy in
    systems programming task). It powers hundreds of production projects3 and is extremely
    hackable, exactly what we need for our ambitious plans. <br/>
    And performance-wise (not taking the systems that Sacrifice decentralization or 
    failure resistance for inflated benchmarks in comparison — no name-calling, but you know what you did),
    Substrate also holds up spectacularly well: 1,500 TPS4 (of actual balance transfers, with 3 second blocks)
    is not something many systems can deliver, even theoretically or in a carefully-controlled lab environments.`,
  },
  Dd = {
    title: "Improvements overview",
    description: `Anyone can grab Substrate and get the performance noted above, out
    of the box. But they’re nowhere near “10 blocks, 10,000 transactions per second” numbers
    we need to finally make blockchains useful for any major non-speculative use cases. Here’s how we’ll
    get there.
`,
  },
  ur = {
    title: "SPIN consensus protocol",
    descriptionFirst: `Launching a new PoS blockchain from scratch is hard. 33% attacks are real, creating
    a chicken-and-egg problem: for PoS to be secure, tokens need value, but for them to have value, PoS 
    needs to be secure. <br/><br/>
    So we’re going to do a reasonable thing and buy some PoS security from Polkadot. It is a 
    well-established network whose main goal is exactly this: providing its ₿100,000 worth of privacy 
    to projects paying a modest ₿0.75 fee for this service.`,
    descriptionSecond: `The actual security guarantees we’re buying for this price 
    are much more sophisticated than what, say, being an L2 on Ethereum can provide: 
    Polkadot supports validating the full contents of our blocks (instead of just certifying that 
    “yep, I’ve seen a block with this particular hash”), and Substrate allows us to leverage that 
    verfication without writing a single extra line of code! <br/>
    But on a deeper level, we don’t want to outsource our consensus mechanism to Polkadot 
    and be its (or anyone’s) L2. We also find Polkadot-provided time to finality (estimated to 
    be 12…18 seconds, depending on implementation details) too long (we’re aiming for 10 blocks per 
    second, remember?).
    So we’ll build our own finality gadget, which will be run on our own validators, 
    much faster and for cheaper (meaning weaker PoS, but better usability). And only 
    the blocks validated by this gadget will be “promoted” to Polkadot. We call this 
    algorithm SPIN (Short-term Parallel Incremental Network agreement).`,
    picture: "/litepaper/SPIN.png",
    descriptionThird: `And as a developer building a dApp on QFN, you’ll be free 
    to choose your finality guarantees: selling a house with an on-chain escrow definitely 
    warrants an additional 12 seconds wait for extra security to kick in, while purchasing a 
    coffee (or a character skin for your blockchain-powered MMO) can happen almost instantly, 
    with just a 0.2…0.3 seconds delay — at par with the best Web2 payment systems.`,
  },
  nl = {
    title: "Sequencing and execution parallelism",
    descriptionFirst: `Getting a transaction into the block (thus securing its position 
    in permanent history) and having it executed and reflected in the state update are 
    two separate processes. For QFN, we propose decoupling these processes into workstreams 
    happening in parallel, so we can speed up block production (effectively: just collation 
    of semantically-correct transactions in some deterministic order) and transaction execution. 
    Block BN only commits to the Merkle root of the state from block BN-1, allowing parallel 
    execution of the state update function with already-committed transactions — or not committing 
    to any changes at all. The latter covers the possibility of transactions in BN-1 being too heavy 
    to be executed in time for our block production deadline. <br/> <br/>
    While such failure indicates the runtime authors miscalibrating transaction weights, 
    we want our blockchain to be self-healing — so the block production deadline increases 
    exponentially for each subsequent block missing its state transition deadline, while block 
    capacity for the new (not yet enacted) transactions shrinks in the same fashion, ensuring 
    the efficient “catch up” of our parallelized state transition function after the transaction ordering one.
`,
    picture: "/litepaper/sequencing.png",
    descriptionSecond: `On top of everything else, this mechanism, together with 
    extremely tight deadlines for block production, makes selfish MEV much harder to execute 
    reliably. And if the node operators would achieve the required speedups and begin capturing 
    it reliably, this should just be treated as an indication that block production deadlines can 
    be reduced even further (say, to 0.05 seconds). Thanks to the Substrate flexibility, this can 
    be done seamlessly, without stopping/hardforking the chain, just by tuning some parameters of the runtime.`,
  },
  zd = {
    title: "PolkaVM",
    description: `Substrate’s forklessly upgradeable runtimes is an incredibly powerful 
    framework to expose custom “precompile” functions to be executed as part of the transaction. 
    A chain can launch with some basic set of built-in functions, and support for advanced ones 
    (zero knowledge proofs verification, custom cryptography, Merkle proof Verification of other 
    blockchains for seamless bridging, etc) can be added later, as demand emerges — all running at 
    close-to-native execution speeds. <br/>
    Many projects still find this process too slow and permissioned. And dApp innovation 
    requires them to express their state transition logic freely and on their own terms. <br/>
    Consequently, we need smart contract support in QFN. <br/> <br/>

    PolkaVM, based on the RISC-V instruction set, is the most advanced smart contract 
    execution layer currently available. It is both close to real computer hardware (ensuring 
    the fastest launch and execution speeds compared to other engines like BPF, Wasm, or EVM6) 
    and established well enough that major compilers and programming/security analysis environments 
    already support it. With a modest degree of ingenuity, one
    might even be able to run a COBOL program as a QFN smart contract! (Implementation 
    is left to the reader, terms and conditions apply.) <br/>
    And for the projects migrating from the previous generation of smart 
    contract environments, PolkaVM ships with an EVM compatibility layer — allowing projects to port 
    their existing Solidity codebases without rewriting (and re-certifying!) them. Such emulation has 
    its performance penalties, but QFN is fast enough that this, emulated, execution might outperform 
    EVM on some other, well-recognized blockchain platforms.`,
  },
  Hd = {
    title: "Verifiable offchain workers",
    description: `Some use cases (machine learning, complex cryptography like homomorphic 
    encryption, even some games) mandate long, CPU and data access-heavy computations. 
    It’s not feasible to put such tasks in our 0.1 second blocks, regardless of our execution speed. <br/>
    Here’s where the latest developments in zero-knowledge proofs come into play. An off-chain 
    worker can prove, leveraging certain fancy cryptography (similar to what is suggested in 
    [Heiss et al., 2022]7 and [Domenech et al., 2024]8) that the computation was performed as 
    specified. Here’s your answer, it’s 42, thank you very much, anyone can verify no cheating 
    occurred by doing a simple cryptographic rain dance with the execution proof provided alongside 
    the result. <br/>
    By allowing any blockchain user to act on either side of such market and exposing 
    both the current blockchain state and some auxiliary, crypto-verified storage for large 
    blobs, QFN would allow dApp developers to seamlessly mix fast, efficient, atomic
    on-chain transactions with explicit ordering with longer running, compute-intensive offchain 
    operations without hard block-imposed deadline, using QFN chain as a payment and verification 
    layer for the latter. <br/>
    For example, this enables one to buy an NFT with usage rights for a 3D asset and launch its 
    rendering into a scene — both powered by the same QFN blockchain, using the same APIs.`,
  },
  Od = {
    title: "Accessing the Web2 from Web3: zkTLS",
    description: `As much as we would like to teleport to the glorious future where all web 
    is web3, it’s not yet there, not even close. And we won’t get there at all if the 
    transition would be a bumpy ride. <br/>
    This is why QFN would incorporate a built-in zkTLS mechanism: a gadget to commit 
    Web2 data on chain, leveraging the cryptography used to encrypt website content for 
    the browser anyway. That green padlock in your browser address bar means that the page 
    you’re looking at indeed came from your favorite social network and hasn’t been tampered 
    with while in transit. It’s only logical that your dApp (using some fancy cryptographic 
    tricks like the ones described in [zkPass whitepaper]9) can do the same when putting the 
    same data on chain.`,
  },
  Yc = {
    title: "Networking: nQUIC and WebRTC",
    descriptionFirst: `Historically, most p2p networks relied on custom-made 
    protocols for communication between nodes. These protocols were designed a decade 
    or even two ago, when rolling out a custom, end-to-end encrypted protocol was not 
    only about potential efficiency gains, but the only option to get all the necessary 
    features, like multiplexing (transmitting several simultaneous logical data streams 
    over a single, reused network connection). <br/><br/>
    Now we have http3/QUIC, which does everything needed — and it powers most global 
    internet traffic, with top engineers ensuring everything works optimally on every 
    level of the networking stack. <br/>
    It would be nice if we could’ve just used that decade of performance improvements and 
    internet infrastructure tuning to our advantage (and, as a nice byproduct, make our 
    node communication protocol stand out less in other traffic, since many actors are trying 
    to censor p2p applications out there, for various reasons). <br/><br/>
    And we can! Our protocol of choice is called nQUIC and is exactly the same as what 
    your browser uses now when you’re reading this page, just with a minor tweak: since 
    we know in advance which node has which encryption key (that’s how we identify peers 
    in distributed systems, instead of relying on centralized DNS and identity provision systems), 
    we can discard the unnecessary complication (and centralization) of TLS key exchange protocols. 
    We replace it with the straightforward, battle-tested, KISS protocol called NOISE10. `,
    descriptionSecond: `That’s what that ‘n’ in ‘nQUIC’ stands for — and the most experienced 
    teams in networking and cryptographic design (like NCC Group and Cloudflare) worked on the 
    protocol’s specification11. Unfortunately, you can’t run a custom network protocol from a 
    browser due to very valid engineering reasons. Defaulting to regular https/QUIC would require 
    each node serving in-browser dApps and light clients to have its own domain name and a valid 
    https certificate to match. This approach is complex, compromises anonymity, and ties our blockchain 
    to centralized web2 elements like certificate authorities and DNS providers. Instead, we’re using 
    WebRTC, a browser-friendly peer-to-peer protocol widely used for in-browser video calls and multiplayer 
    games. Our engineering team believes the effort is worthwhile to make it work for standalone “full” 
    nodes of QFN outside browsers, since WebRTC’s built-in support for networking quirks and corner-cases, 
    such as UDP hole punching12, is hard to match.`,
  },
  Zc = {
    title: "Storage, sync and light clients",
    descriptionFirst: `Any widely used blockchain suffers from history bloat: without 
    special cryptoeconomic incentives like Existential Deposits13 (which ruin UX), 
    every transaction adds some (even if just a few bytes) data to the state, kept and replicated forever. <br/>
    Given the rapid growth of server (and even desktop) hardware storage capacity, it 
    might not be seen as a big problem. However, it only doesn’t if you don’t account 
    for the fastest growing segment of Internet users: mobile devices. Not only have they 
    limited (frequently non-upgradable) storage capacity, but the mobile internet access 
    costs and speeds in most places make “downloading 1TB of blockchain data to participate 
    in this shiny new cryptoeconomical activity” impossible.`,
    descriptionSecond: `To target that “next one billion” Internet users (as well as people 
    glued to their gadgets while sitting on a toilet — meaning effectively everyone), we need 
    to make low bandwidth/low storage devices first class citizens in our networking designs. <br/>
    Light nodes don’t store or sync the full history of everything. They just store enough 
    to know how to tell truth from lies about the on-chain data, using the clever mechanism 
    called Merkle proofs. They need to download block headers, which is ~100 bytes per block — 
    and this can be further reduced by an order of magnitude (using crypto-verified skip-lists) 
    for cases that can tolerate a few seconds of latency. <br/>
    Historically, light clients have been an afterthought in most blockchain designs; 
    extracting and providing a Merkle proof from blockchain storage takes a non-negligible amount 
    of resources. Without a carefully designed set of storage optimizations and light client 
    protocol improvements, it’s only expected that light clients in those networks are heavily 
    throttled, limited, and generally perform way below their theoretical capabilities. In QFN, 
    we aim to support millions of users interacting with dApps simultaneously. If they are not 
    running their own light nodes, they would be at the mercy of the few centralized RPC providers 
    (as seen in some other major networks), which introduces both privacy and censorship risks. 
    Instead of the typical limit of “100 light client connections per full node,” we aim to raise the 
    bar at least 100×. We will do this by tuning the network protocol used by light clients and 
    leveraging our team’s expertise in RDBMS storage engines to make the overhead of extracting 
    and packaging a Merkle-proven answer a lighter task any full node shouldn’t fret too much about. <br/>
    Designing DB storage engines for real-life applications is more of a dark art than science. 
    So, we’re taking a benchmark-heavy approach for each and every minor design decision here 
    and will be (in our team’s usual rigorously-transparent fashion) constantly publishing 
    articles and writeups with our latest findings and relevant codebase improvements.`,
  },
  il = {
    title: "RPC layer: Cap’n Proto",
    descriptionFirst: `As much as we’d like to have light clients as the dominant mode of connecting
    end-users to the QFN blockchain, in some use cases even “light” is not light enough. 
    There are probably better ways for a microwave oven or fitness bracelet to interact 
    with on-chain data than having the device sync with the network state continuously. <br/>
    The key points about such embedded use cases are that it’s a) quite sensitive to the chosen 
    protocol’s performance and b) not constrained by modern web browser technologies. So there’s 
    no reason to pick the traditionally-used JSON-RPC (and suffer its inefficiencies and quirks, 
    like having to pass blobs of data as hex-encoded strings instead of much more compact “raw” bytes). 
    We chose the state-of-the-art RPC protocol (in terms of performance and encoding/decoding efficiency), 
    which is Cap’n Proto. <br/><br/>
    Not only does it feature a zero-copy decoding (meaning the data sent “over the wire” doesn’t 
    need to be transformed for future consumption — what you get from the network is exactly what 
    you need), but also supports promise pipelining [https://capnproto.org/rpc.html], allowing our 
    microwave to send its first query (“who is the address of on-chain wallet named ‘Bob’?”) and 
    immediately follow up with the second one (“and by the way, what’s the balance of that wallet?”), 
    without waiting for the first answer (the “that wallet” part is what programmers for some reason 
    call “a promise” in their code; Bob is a really trustworthy guy who can be trusted on his promises, 
    it seems. Maybe he’s an uncle of yours?).`,
    picture: "/litepaper/RPCLayer.png",
    descriptionSecond: `But, you may ask, how does the microwave know which server to ask? If 
    it’s just the good old centralized DNS query, we end up with the classical centralized “client-server” 
    architecture — just with extra steps. Can we do better? <br/><br/>
    We definitely do. Of course, QFN blockchain might get some centrally-run RPC infrastructure: 
    for example, your microwave’s manufacturer could set one up for their devices to use as a fallback. 
    But we want our microwave-development SDK to first try and discover local QFN nodes (like that 
    QFN-enabled messaging app you keep running in the system tray on your laptop), and only reach out 
    to global, centralized ones as a fallback. <br/><br/>
    There’s a whole set of technologies aimed at local services discovery, ranging from using “basic” 
    UDP broadcast packets to more sophisticated tech your router might or might not support, like mDNS18 
    and UPnP19. Picking the correct protocols to support in our SDK cannot be done “off the bat” and will 
    be a long project of trial, error and feedback from early beta testers — but rest assured this is not 
    a feature we’re willing to compromise on.`,
  },
  Wd = {
    title: "Internal optimizations",
    description: `And of course, our design improvements over the “baseline” Substrate don’t end here. 
    The current framework has already accumulated multiple decisions and tradeoffs we consider to be 
    “legacy”: there’s nothing inherently wrong with them, but they’re kept in the codebase mostly for 
    backwards compatibility reasons — and we, developing QFN from scratch, can name several dozens 
    of places where we (with our specific use cases and design goals in mind) can code something more 
    efficient: more optimal “hot path” code, less overhead via hardcoding a certain design decision 
    (like picking BLAKE3 as the only universal hashing primitive across the codebase), easier to debug, 
    and so on. <br/>
    None of these choices (well, except the BLAKE3 one; that shit is lit) would bring a spectacular 
    speedup on its own — but those are expected to accumulate, resulting in a solid 2×..3× improvement 
    over the generic Substrate case presented in the previous chapter.`,
  },
  Md = {
    title: "Things we keep from Substrate",
    description: `From the chapter above, readers might get the impression that we leave no 
    stones unturned, aiming for a full internal rewrite of the Substrate framework, leaving 
    it in our codebase by name only. Would it have been better to just write our own blockchain 
    beginning with an empty Makefile? <br/> <br/>
    There’s a whole set of technologies aimed at local services discovery, ranging from using 
    “basic” UDP broadcast packets to more sophisticated tech your router might or might not support, 
    like mDNS18 and UPnP19. Picking the correct protocols to support in our SDK cannot be done “off 
    the bat” and will be a long project of trial, error and feedback from early beta testers — but rest 
    assured this is not a feature we’re willing to compromise on. <br/> <br/>
    Many teams take this approach (after all, programmers love building their own lunaparks 
    from scratch). However, this wouldn’t be wise, since Substrate blockchain building framework is an 
    extremely well-thought-out set of foundational libraries, and we will reuse their state-of-the-art 
    features and battle-tested codebase. In this chapter we highlight the most important things we are 
    taking for granted with this approach.
`,
  },
  $d = {
    title: "Forkless runtime upgrades",
    description: `When people criticize “code is law” as a maxim, most frequently 
    they imply “immutable code is law.” And they are correct in that. Even if the original 
    system was flawlessly engineered and implemented without any bugs, continuously maintaining 
    relevance against something as fast-changing as worldwide socioeconomic structures is not 
    something that anyone would manage to hit in a “once and forever” fashion. <br/>
    Our system needs to evolve alongside its surroundings; having a built-in way to extend, 
    improve, or fix bugs in our blockchain’s core without dealing with contentious forks and the 
    status quo bias of huge capital allocation on chain development is such a natural requirement 
    it’s strange that no other systems developed anything comparable to Substrate’s forkless runtime 
    upgrades mechanism. <br/>
    The idea is simple: let’s encode the canonical rules of our blockchain not in some “colored 
    paper” PDF, but in an executable binary (expressed in Wasm, for platform portability and universality), 
    and store that blob on the very chain it describes. Our protocol should also cover “meta-rules”: 
    1. An algorithm for proposing and accepting new rules through democratic consensus among blockchain 
    stakeholders. 2. A coordination mechanism allowing every node of our blockchain to switch to this new 
    Runtime. 3. A clearly defined opt-out process to allow participants escape the potential hostile power 
    capture: eg, you’d need to restart your node with a specific CLI parameter to skip one particular runtime 
    upgrade (and thus create a fork of the network). <br/>
    This way, politically engaged stakeholders will use well-defined on-chain mechanisms to govern 
    the evolution of the Substrate-based chain, while inert node operators and institutions would 
    effortlessly stick with the outcomes of that governance, without worrying about future changes 
    affecting their operations or whether to oppose them to improve their operational bottom line. <br/> <br/>
    One wonders why we don’t see this everywhere — well, at least we will see this in the <br/>
    QFN blockchain.`,
  },
  Qd = {
    title:
      "Ecosystem of pallets (including ever-useful Assets and Multisig/Proxy)",
    description: `There are so many behaviors in the blockchain world that aren’t novel or shiny. 
    Think of balances and token transfers: they need to be there, they need to be extremely fast and 
    reliable, with a codebase reviewed by top security professionals — and that’s it; there’s nothing 
    inherently controversial in the design of such a system, or any opportunity for algorithmic 
    optimizations (those are mostly basic arithmetics performed on balances) involved. There is also a 
    huge benefit in having this as standardized as possible, so exchanges can reuse their integration 
    code from some other similarly-built coin, and developing and certifying a new Ledger app from scratch 
    and to sign such transactions won’t be necessary. <br/>
    Luckily, Substrate got us covered with FRAME21 — a collection of ready-for-production implementations 
    of the most common blockchain primitives. These range from basic assets/balances to the support of 
    atomic swaps, chain-native account abstraction primitives (with built-in multisignature wallets and 
    proxied accounts). They are free for us to pick, reuse, and improve as we see fit. <br/>
    An absolute must if you don’t want to waste your world-class blockchain engineers’ time reimplementing 
    basic bookkeeping the 1000th time.`,
  },
  dr = {
    title: "SCALE and metadata (and existing hardware/software wallets)",
    descriptionFirst: `Input deserialization is such a major source of software bugs and vulnerabilities 
    that it made it into its own category in the OWASP Top 10 in 201722. And blockchains fundamentally 
    a) interact with a lot of unfiltered, untrusted input from arbitrary third parties (anyone can send 
    a transaction, that’s the whole point), and b) pay a huge premium for each extra byte required by the 
    transaction serialization format, since each such byte would be kept for decades, replicated over 
    thousands and thousands of nodes.`,
    descriptionSecond: `On top of this, codec design is a slowly-moving field (unlike, say, algorithms 
    powering decentralized consensus engines), and reusing some existing well-established encoding 
    protocols is not going to set us back against competition. <br/>
    So we can do better than rolling our own codec and requiring our own tooling for every programming 
    environment in the world. The Substrate codec, SCALE (Simple Concatenated Aggregate Little-Endian)23, 
    is as good as it gets. It is pretty compact, designed specifically for blockchain usage by the same 
    people who previously designed RLP, which is still used in every Ethereum-compatible network out there. 
    By now SCALE has been deployed to multiple multi-billion dollar blockchains for years, meaning it has been 
    tested and fuzzed exhaustively, with no stones unturned.`,
    picture: "/litepaper/SCALE.png",
    descriptionThird: `It’s not enough to know how to encode things. Communicating parties need 
    to agree on what to encode. This isn’t a problem when two identical versions of the same blockchain 
    node talk to each other. But what about a no longer maintained web frontend for a blockchain that 
    underwent significant runtime upgrades? Section 4.1 highlights why QFN having runtime upgrades is a 
    desired feature, not a bug. <br/>
    Substrate has us covered here as well: not only every runtime can expose formally-specified metadata 
    (a form of dictionary, detailing how to parse each possible blockchain-specific message for this 
    particular runtime version) — but the
    runtime itself is metadata-aware, meaning a hacker can’t mislead users into believing the transaction 
    encoded as '0×abcd' sends 1 coin to Bob while actually sending all of them to Mallory. The runtime will 
    reject transactions built on false metadata assumptions, rendering the whole class of attacks impossible. 
    Who doesn’t like the whole classes of attacks being rendered impossible? Hackers, not us in the QFN team.`,
  },
  eh = {
    title: "Ecosystem tools: block explorers, dev tools, Metamask snap etc",
    descriptionFirst: `Ok, so we have a pretty standard network protocol carrying over data serialized 
    in a well-known codec, to be interpreted together with some machine-readable metadata`,
    descriptionSecond: `that is already supported by existing blockchain-interaction libraries for most 
    frequently used programming environments. What does it get us? <br/><br/>
    Well, everything. Block explorer? There are several opensource codebases to chose from (Subscan, 
    Polkascan). Interactive developer tools for dApp builders to experiment with before writing production 
    code? We are well covered (PolkadotJS). Helm charts for node deployments in Kubernetes, together with 
    all necessary telemetry and monitoring, and even optional support for testnet management and a faucet? 
    All there (paritytech/helm-charts). A sidecar to be used by exchanges to effortlessly integrate your 
    token into their existing systems? Aye
    (paritytech/substrate‐api-sidecar). There’s even a Metamask “snap”, for your users to pretend they’re 
    using their grandfather’s old boring Ethereum while actually living at the bleeding edge. <br/>
    Substrate: come for an ultra-performant blockchain framework, and stay for the full range of turnkey 
    solutions for bootstrapping the whole ecosystem surrounding it!`,
  },
  Ud = {
    title: "SDK",
    description: `So we’ve built our blockchain, and it turned out to be even faster than we anticipated. 
    The problem is — it’s useless without other developers building their dApps on top of it. For that, 
    we need an SDK (Software Developer Kit, or, how some members of our team call it, Several Dozen Koffees). <br/>
    What properties should the SDK have to ensure that the apps built on top of it are faster, snappier, 
    and more secure than today’s average blockchain-powered dApp? (Not a high bar to clear, we know.) How 
    do we even approach this question?`,
  },
  qd = {
    title: "Light-client first",
    description: `As discussed above, we don’t want our ecosystem to become a hostage of a 
    centralized RPC provider providing the only way for the majority of the dApp users to interact 
    with our chain. <br/>
    This means no matter which tech stack (browser, mobile, desktop, etc.) our SDK targets, the codebase of 
    our light client should be trivial to compile and embed in all of them. Enter Smoldot.
    Rust is a pretty universal language. You can compile it to any of the supported target platforms, 
    from server-grade 64-bit CPUs to exotic 16-bit microcontrollers, 
    GPU-specific microcode and of course platform-independent Wasm bytecode, if you follow certain development 
    guidelines. At the moment of writing, it’s not yet clear what it means to have a blockchain light node 
    compiled for the PTX bytecode to be executed on NVIDIA GPUs. But the possibility is there. Maybe Apple 
    VisionOS will become a relevant platform for some blockchain-powered metaverse project in the future? <br/>
    No matter which platform you want your SDK for, betting on Smoldot for light client operation is a safe, 
    reliable bet. And smol in Smoldot hints at low system requirements; our internal tests indicate the same, 
    so no worries that your users can only use your fancy QFN-enabled dApp on the latest, largest, most 
    expensive Pro model of the smartphone — any reasonably modern one will do just fine, as well as any web 
    browser.`,
  },
  th = {
    title: "Batteries included",
    descriptionFirst: `Ok, cool, your dApp can read and write from the blockchain without compromising its 
    users’ security and privacy while doing so. Now what? <br/>
    Well, taking all other building blocks the SDK will provide — and building a wonderful castle (or 
    whatever your heart desires). We aim at providing a “batteries included” experience — once again 
    an area where Substrate ecosystem supplements our efforts with enough pre-existing solutions: encryption 
    and key handling libraries, common hardware wallets support, high-level API for QFN-provided features 
    (like Verifiable`,
    descriptionSecond: `Offchain Workers), useful app-building primitives (like the fastest CRDT 
    implementation we will be able to ship) and even a special scripting language (also known as “DSL”) 
    for expressing privacy-preserving custom logic for your app, to be converted into zero-knowledge execution 
    on-chain. <br/>
    While the chain itself can handle offloading your “big data” computations to the QFN-provided offchain 
    workers, storing that data on-chain might be a bad idea: it’s called big for a reason, and when storing 
    data on-chain, every byte counts. That’s why the QFN SDK will ship with iroh bindings for integration 
    with the most advanced content-addressable distributed file-system currently available, so you have a way 
    to store and distribute your Big Data Files™ in a crypto-verifiable way, no matter how big they actually 
    are — all transparently accessible from your QFN-powered apps.`,
  },
  Vd = {
    title: "Web now, native later",
    description: `The consensus within our engineering team on this topic is unusually strong: web browsers 
    are one of the worst application development platforms in existence. They are slow, laggy, and limited 
    in ways they interact with both user inputs and the computer’s hardware… They are also the most widespread 
    ones, and the reason why there’s a word web in “web3”. <br/>
    Therefore, our engineering priorities are straightforward: the first platform to be supported in the 
    QFN SDK should be a modern, HTML5-enabled web browser. Yeah, we’ll have to tame Smoldot to behave under 
    the memory and performance constraints of the JavaScript engine; ensure WebRTC connections to other 
    blockchain nodes work via mobile internet; and expose iroh and cryptography bindings to browser-based 
    JavaScript. It’s good to be standing on the shoulders of giants here, and not having to fight all those 
    fights alone, building codebase from scratch. <br/>
    That said, we aim bigger and bolder than being just another JS-based toolkit for blending web2 and web3 
    together. So far, there have been no significant attempts at launching a native-first application platform 
    for blockchain-powered dApps on mobile devices. What can it look like? Roblox, but for adults? Google Docs, 
    but for DeFi trading strategies? TikTok for AI-assisted freelancers? Let’s discuss potential use cases.`,
  },
  ah = {
    title: "Areas of potential application",
    description: `Currently, blockchain-powered games are essentially games in name only. There are 
    no major productivity apps that truly leverage the distributed, censorship-resistant power of blockchain 
    networks. No reliable way to hire a freelance graphic designer, pay them, and track their reputation 
    using a decentralized ledger. No major distributed social network or chat app. Even online auctions and 
    classifieds aren’t replaced with p2p-provided crypto verified matchmaking and escrow services. In short — 
    web3 is still in its infancy. <br/>
    In our opinion, the current web3’s technical limitations just make them not competitive enough with all 
    the bells and whistles consumers have learned to expect from their typical web2 counterparts.
    What if the users didn’t have to wait a dozen seconds for their changes to reflect in the blockchain-based 
    collaborative document? What if there was a chain that, by design, avoided a single point of failure 
    (and in effect, censorship) while allowing citizens of any, even the most repressive, country access to a 
    global network of social and professional connections? What if there was a blockchain-powered job market 
    with a search results page that didn’t feel laggy when displaying a few hundred matching CVs/job offers? <br/>
    This is exactly what we’re aiming at with QFN: 100msec transaction latency; true scalability, adopting the 
    latest web2 technologies for our use cases; building a network that would sustain a million light nodes 
    participating; native-first SDK with batteries included, allowing global developers to roll out mobile 
    apps with the same ease they are now doing with web-based ones.`,
    picture: "/litepaper/areas.png",
  },
  Kd = {
    title: "How Blockchains Work",
    description: `Blockchains are state transition functions, executing transactions over a replicated 
    state stored in distributed ledger. (Bear with me, all this will come useful a bit later.) <br/>
    Ledger is run by peers, which communicate over global networks (most often — Internet), and those 
    peers expose their state for the consumer dApps to read from and interact with. It’s that global 
    shared state (and mutations of it, happening in concert and fast enough) that is actually important 
    in the blockchain building, and transactions/blocks/peers are just the state of the art technical 
    framework to achieve this. <br/> <br/>
    Our aim is to build a ledger, which would be good enough for the broadest level of real-world applications, 
    without introducing any failure modes which will make this unreliable. <br/>
    Blocks in the blockchain is a way to order the global execution of transactions — without global order 
    things like double spends are impossible to avoid. <br/> <br/>
    We only know how to have a single block producer every time, and it needs to be circulated (ideally: 
    unpredictably and permissionlessly). No circulation (or no way for a random entity to enter the pool 
    of the block producers) — no censorship resistance (both on technical, by hackers, and organisational, 
    by hostile economic actors, levels) <br/>
    Finality is needed for any real-world economic activity: we need to know when transaction is “done”, 
    and block producers can create forks in history even when chain is not being attacked. With no finality, 
    we can never be certain that our transaction won’t get overwritten by a reorg. <br/> <br/>
    Consensus provides both block authoring “lottery” and finality mechanisms: but not necessarily by a 
    single algorithm. Consensus failures (like chain splits or finalization delays) are common both for 
    bad computer science and engineering mistakes. <br/> <br/>
    <strong>Lifecycle of the transaction:</strong> <br/> <br/>
    <ul>
    <li>● Transaction goes into the mempool, gossiped across block producers</li>
    <li>● Transaction gets its spot in the block</li>
    <li>● Transaction gets executed, and the result (success/failure/outofgas) is
    recorded in the state </li>
    <li>● Block is getting transmitted across other nodes, which update their state
    correspondingly</li>
    <li>● The state is confirmed by the finality gadget of the consensus.</li>
    </ul>
    <br/>
    There’s no requirement for blocks to include the updated state immediately (even if it’s useful 
    in high-blocktime systems), and multiple finality gadgets can coexist (provided they are nested, and 
    not parallelized — to avoid potential chain deadlock).`,
  };
function Jf(i) {
  let d,
    Q,
    oe,
    T,
    lt,
    rh = "Docs",
    cl,
    ot,
    sh = "Latest update: 06 August 2025",
    hl,
    _t,
    ue,
    lh =
      '',
    ul,
    nt,
    oh = `<h1 class="${z(
      "xs:text-3xl text-2xl leading-[1.3] md:text-4xl"
    )} svelte-1jrib63">The Great dApp Gap: <br/> Tunnelling over the barriers <br/> into mass dApp adoption</h1>`,
    dl,
    q,
    pl,
    fl,
    kt,
    pr,
    Gd = Nd.title + "",
    ml,
    bl,
    gl,
    Et,
    fr,
    Jd = Nd.description + "",
    wl,
    V,
    vl,
    yl,
    St,
    mr,
    Xd = Ld.title + "",
    _l,
    kl,
    El,
    xt,
    br,
    Yd = Ld.description + "",
    Sl,
    v,
    xl,
    Il,
    It,
    gr,
    Zd = ol.title + "",
    Al,
    jl,
    Bl,
    At,
    wr,
    ep = ol.descriptionFirst + "",
    Tl,
    it,
    nh,
    Pl,
    jt,
    vr,
    tp = ol.descriptionSecond + "",
    Rl,
    Cl,
    Nl,
    ct,
    Bt,
    de,
    yr,
    ap = `1&nbsp;${p[1]}`,
    Ll,
    Tt,
    pe,
    _r,
    rp = `2&nbsp;${p[2]}`,
    Fl,
    K,
    Dl,
    zl,
    Pt,
    kr,
    sp = Fd.title + "",
    Hl,
    Ol,
    Wl,
    Rt,
    Er,
    lp = Fd.description + "",
    Ml,
    G,
    $l,
    Ql,
    Ct,
    Sr,
    op = Dd.title + "",
    Ul,
    ql,
    Vl,
    Nt,
    xr,
    np = Dd.description + "",
    Kl,
    m,
    Gl,
    Jl,
    Lt,
    Ir,
    ip = ur.title + "",
    Xl,
    Yl,
    Zl,
    Ft,
    Ar,
    cp = ur.descriptionFirst + "",
    eo,
    U,
    to,
    ao,
    ro,
    so,
    Dt,
    fe,
    jr,
    hp = `3&nbsp;${p[3]}`,
    lo,
    zt,
    me,
    Br,
    up = `4&nbsp;${p[4]}`,
    oo,
    Ht,
    be,
    Tr,
    dp = `5&nbsp;${p[5]}`,
    no,
    io,
    co,
    ho,
    uo,
    Ot,
    Pr,
    pp = ur.descriptionSecond + "",
    po,
    ht,
    ih,
    fo,
    Wt,
    Rr,
    fp = ur.descriptionThird + "",
    mo,
    P,
    bo,
    go,
    Mt,
    Cr,
    mp = nl.title + "",
    wo,
    vo,
    yo,
    $t,
    Nr,
    bp = nl.descriptionFirst + "",
    _o,
    ut,
    ch,
    ko,
    Qt,
    Lr,
    gp = nl.descriptionSecond + "",
    Eo,
    R,
    So,
    xo,
    Ut,
    Fr,
    wp = zd.title + "",
    Io,
    Ao,
    jo,
    qt,
    Dr,
    vp = zd.description + "",
    Bo,
    To,
    Po,
    ge,
    zr,
    yp = `6&nbsp;${p[6]}`,
    Ro,
    x,
    Co,
    No,
    Vt,
    Hr,
    _p = Hd.title + "",
    Lo,
    Fo,
    Do,
    Kt,
    Or,
    kp = Hd.description + "",
    zo,
    Ho,
    Oo,
    dt,
    Gt,
    we,
    Wr,
    Ep = `7&nbsp;${p[7]}`,
    Wo,
    Jt,
    ve,
    Mr,
    Sp = `8&nbsp;${p[8]}`,
    Mo,
    $o,
    Qo,
    J,
    Uo,
    qo,
    Xt,
    $r,
    xp = Od.title + "",
    Vo,
    Ko,
    Go,
    Yt,
    Qr,
    Ip = Od.description + "",
    Jo,
    w,
    Xo,
    Yo,
    Zt,
    Ur,
    Ap = Yc.title + "",
    Zo,
    en,
    tn,
    ea,
    qr,
    jp = Yc.descriptionFirst + "",
    an,
    rn,
    sn,
    ye,
    Vr,
    Bp = `9&nbsp;${p[9]}`,
    ln,
    on,
    nn,
    cn,
    hn,
    ta,
    Kr,
    Tp = Yc.descriptionSecond + "",
    un,
    b,
    dn,
    pn,
    aa,
    Gr,
    Pp = Zc.title + "",
    fn,
    mn,
    bn,
    ra,
    Jr,
    Rp = Zc.descriptionFirst + "",
    gn,
    wn,
    vn,
    ne,
    sa,
    _e,
    Xr,
    Cp = `10&nbsp;${p[10]}`,
    yn,
    la,
    ke,
    Yr,
    Np = `11&nbsp;${p[11]}`,
    _n,
    oa,
    Ee,
    Zr,
    Lp = `12&nbsp;${p[12]}`,
    kn,
    na,
    Se,
    es,
    Fp = `13&nbsp;${p[13]}`,
    En,
    Sn,
    xn,
    ia,
    ts,
    Dp = Zc.descriptionSecond + "",
    In,
    An,
    jn,
    xe,
    ca,
    Ie,
    as,
    zp = `14&nbsp;${p[14]}`,
    Bn,
    ha,
    Ae,
    rs,
    Hp = `15&nbsp;${p[15]}`,
    Tn,
    ua,
    je,
    ss,
    Op = `16&nbsp;${p[16]}`,
    Pn,
    C,
    Rn,
    Cn,
    da,
    ls,
    Wp = il.title + "",
    Nn,
    Ln,
    Fn,
    pa,
    os,
    Mp = il.descriptionFirst + "",
    Dn,
    pt,
    hh,
    zn,
    fa,
    ns,
    $p = il.descriptionSecond + "",
    Hn,
    X,
    On,
    Wn,
    ma,
    is,
    Qp = Wd.title + "",
    Mn,
    $n,
    Qn,
    ba,
    cs,
    Up = Wd.description + "",
    Un,
    I,
    qn,
    Vn,
    ga,
    hs,
    qp = Md.title + "",
    Kn,
    Gn,
    Jn,
    wa,
    us,
    Vp = Md.description + "",
    Xn,
    Yn,
    Zn,
    ie,
    va,
    Be,
    ds,
    Kp = `17&nbsp;${p[17]}`,
    ei,
    ya,
    Te,
    ps,
    Gp = `18&nbsp;${p[18]}`,
    ti,
    _a,
    Pe,
    fs,
    Jp = `19&nbsp;${p[19]}`,
    ai,
    ka,
    Re,
    ms,
    Xp = `20&nbsp;${p[20]}`,
    ri,
    si,
    li,
    Y,
    oi,
    ni,
    Ea,
    bs,
    Yp = $d.title + "",
    ii,
    ci,
    hi,
    Sa,
    gs,
    Zp = $d.description + "",
    ui,
    Z,
    di,
    pi,
    xa,
    ws,
    ef = Qd.title + "",
    fi,
    mi,
    bi,
    Ia,
    vs,
    tf = Qd.description + "",
    gi,
    g,
    wi,
    vi,
    Aa,
    ys,
    af = dr.title + "",
    yi,
    _i,
    ki,
    ja,
    _s,
    rf = dr.descriptionFirst + "",
    Ei,
    Si,
    xi,
    ft,
    Ba,
    Ce,
    ks,
    sf = `21&nbsp;${p[21]}`,
    Ii,
    Ta,
    Ne,
    Es,
    lf = `22&nbsp;${p[22]}`,
    Ai,
    ji,
    Bi,
    Pa,
    Ss,
    of = dr.descriptionSecond + "",
    Ti,
    mt,
    uh,
    Pi,
    Ra,
    xs,
    nf = dr.descriptionThird + "",
    Ri,
    y,
    Ci,
    Ni,
    Ca,
    Is,
    cf = eh.title + "",
    Li,
    Fi,
    Di,
    Na,
    As,
    hf = eh.descriptionFirst + "",
    zi,
    Hi,
    Oi,
    La,
    js,
    uf = eh.descriptionSecond + "",
    Wi,
    Mi,
    $i,
    Le,
    Bs,
    df = `23&nbsp;${p[23]}`,
    Qi,
    A,
    Ui,
    qi,
    Fa,
    Ts,
    pf = Ud.title + "",
    Vi,
    Ki,
    Gi,
    Da,
    Ps,
    ff = Ud.description + "",
    Ji,
    Xi,
    Yi,
    D,
    za,
    Fe,
    Rs,
    mf = `24&nbsp;${p[24]}`,
    Zi,
    Ha,
    De,
    Cs,
    bf = `25&nbsp;${p[25]}`,
    ec,
    Oa,
    ze,
    Ns,
    gf = `26&nbsp;${p[26]}`,
    tc,
    Wa,
    He,
    Ls,
    wf = `27&nbsp;${p[27]}`,
    ac,
    Ma,
    Oe,
    Fs,
    vf = `28&nbsp;${p[28]}`,
    rc,
    $a,
    We,
    Ds,
    yf = `29&nbsp;${p[29]}`,
    sc,
    lc,
    oc,
    ee,
    nc,
    ic,
    Qa,
    zs,
    _f = qd.title + "",
    cc,
    hc,
    uc,
    Ua,
    Hs,
    kf = qd.description + "",
    dc,
    _,
    pc,
    fc,
    qa,
    Os,
    Ef = th.title + "",
    mc,
    bc,
    gc,
    Va,
    Ws,
    Sf = th.descriptionFirst + "",
    wc,
    vc,
    yc,
    bt,
    Ka,
    Me,
    Ms,
    xf = `30&nbsp;${p[30]}`,
    _c,
    Ga,
    $e,
    $s,
    If = `31&nbsp;${p[31]}`,
    kc,
    Ec,
    Sc,
    Ja,
    Qs,
    Af = th.descriptionSecond + "",
    xc,
    j,
    Ic,
    Ac,
    Xa,
    Us,
    jf = Vd.title + "",
    jc,
    Bc,
    Tc,
    Ya,
    qs,
    Bf = Vd.description + "",
    Pc,
    Rc,
    Cc,
    gt,
    Za,
    Qe,
    Vs,
    Tf = `32&nbsp;${p[32]}`,
    Nc,
    er,
    Ue,
    Ks,
    Pf = `33&nbsp;${p[33]}`,
    Lc,
    Fc,
    Dc,
    H,
    zc,
    Hc,
    tr,
    Gs,
    Rf = ah.title + "",
    Oc,
    Wc,
    Mc,
    ar,
    Js,
    Cf = ah.description + "",
    $c,
    wt,
    dh,
    Qc,
    cr,
    Uc,
    te,
    vt,
    ph = "Appendix",
    qc,
    rr,
    Xs,
    Nf = Kd.title + "",
    Vc,
    Kc,
    Gc,
    sr,
    Ys,
    Lf = Kd.description + "",
    Jc,
    lr,
    yt,
    Zs,
    Xc,
    fh;
  return (
    (yt = new Gf({})),
    {
      c() {
        (d = r("main")),
          (Q = r("section")),
          (oe = r("div")),
          (T = r("div")),
          (lt = r("div")),
          (lt.textContent = rh),
          (cl = l()),
          (ot = r("p")),
          (ot.textContent = sh),
          (hl = l()),
          (_t = r("div")),
          (ue = r("button")),
          (ue.innerHTML = lh),
          (ul = l()),
          (nt = r("div")),
          (nt.innerHTML = oh),
          (dl = l()),
          (q = r("section")),
          (pl = r("br")),
          (fl = l()),
          (kt = r("h2")),
          (pr = new h(!1)),
          (ml = l()),
          (bl = r("br")),
          (gl = l()),
          (Et = r("p")),
          (fr = new h(!1)),
          (wl = l()),
          (V = r("section")),
          (vl = r("br")),
          (yl = l()),
          (St = r("h2")),
          (mr = new h(!1)),
          (_l = l()),
          (kl = r("br")),
          (El = l()),
          (xt = r("p")),
          (br = new h(!1)),
          (Sl = l()),
          (v = r("section")),
          (xl = r("br")),
          (Il = l()),
          (It = r("h2")),
          (gr = new h(!1)),
          (Al = l()),
          (jl = r("br")),
          (Bl = l()),
          (At = r("p")),
          (wr = new h(!1)),
          (Tl = l()),
          (it = r("img")),
          (Pl = l()),
          (jt = r("p")),
          (vr = new h(!1)),
          (Rl = l()),
          (Cl = r("br")),
          (Nl = l()),
          (ct = r("ul")),
          (Bt = r("li")),
          (de = r("a")),
          (yr = new h(!1)),
          (Ll = l()),
          (Tt = r("li")),
          (pe = r("a")),
          (_r = new h(!1)),
          (Fl = l()),
          (K = r("section")),
          (Dl = r("br")),
          (zl = l()),
          (Pt = r("h2")),
          (kr = new h(!1)),
          (Hl = l()),
          (Ol = r("br")),
          (Wl = l()),
          (Rt = r("p")),
          (Er = new h(!1)),
          (Ml = l()),
          (G = r("section")),
          ($l = r("br")),
          (Ql = l()),
          (Ct = r("h2")),
          (Sr = new h(!1)),
          (Ul = l()),
          (ql = r("br")),
          (Vl = l()),
          (Nt = r("p")),
          (xr = new h(!1)),
          (Kl = l()),
          (m = r("section")),
          (Gl = r("br")),
          (Jl = l()),
          (Lt = r("h2")),
          (Ir = new h(!1)),
          (Xl = l()),
          (Yl = r("br")),
          (Zl = l()),
          (Ft = r("p")),
          (Ar = new h(!1)),
          (eo = l()),
          (U = r("ul")),
          (to = r("br")),
          (ao = l()),
          (ro = r("br")),
          (so = l()),
          (Dt = r("li")),
          (fe = r("a")),
          (jr = new h(!1)),
          (lo = l()),
          (zt = r("li")),
          (me = r("a")),
          (Br = new h(!1)),
          (oo = l()),
          (Ht = r("li")),
          (be = r("a")),
          (Tr = new h(!1)),
          (no = l()),
          (io = r("br")),
          (co = l()),
          (ho = r("br")),
          (uo = l()),
          (Ot = r("p")),
          (Pr = new h(!1)),
          (po = l()),
          (ht = r("img")),
          (fo = l()),
          (Wt = r("p")),
          (Rr = new h(!1)),
          (mo = l()),
          (P = r("section")),
          (bo = r("br")),
          (go = l()),
          (Mt = r("h2")),
          (Cr = new h(!1)),
          (wo = l()),
          (vo = r("br")),
          (yo = l()),
          ($t = r("p")),
          (Nr = new h(!1)),
          (_o = l()),
          (ut = r("img")),
          (ko = l()),
          (Qt = r("p")),
          (Lr = new h(!1)),
          (Eo = l()),
          (R = r("section")),
          (So = r("br")),
          (xo = l()),
          (Ut = r("h2")),
          (Fr = new h(!1)),
          (Io = l()),
          (Ao = r("br")),
          (jo = l()),
          (qt = r("p")),
          (Dr = new h(!1)),
          (Bo = l()),
          (To = r("br")),
          (Po = l()),
          (ge = r("a")),
          (zr = new h(!1)),
          (Ro = l()),
          (x = r("section")),
          (Co = r("br")),
          (No = l()),
          (Vt = r("h2")),
          (Hr = new h(!1)),
          (Lo = l()),
          (Fo = r("br")),
          (Do = l()),
          (Kt = r("p")),
          (Or = new h(!1)),
          (zo = l()),
          (Ho = r("br")),
          (Oo = l()),
          (dt = r("ul")),
          (Gt = r("li")),
          (we = r("a")),
          (Wr = new h(!1)),
          (Wo = l()),
          (Jt = r("li")),
          (ve = r("a")),
          (Mr = new h(!1)),
          (Mo = l()),
          ($o = r("br")),
          (Qo = l()),
          (J = r("section")),
          (Uo = r("br")),
          (qo = l()),
          (Xt = r("h2")),
          ($r = new h(!1)),
          (Vo = l()),
          (Ko = r("br")),
          (Go = l()),
          (Yt = r("p")),
          (Qr = new h(!1)),
          (Jo = l()),
          (w = r("section")),
          (Xo = r("br")),
          (Yo = l()),
          (Zt = r("h2")),
          (Ur = new h(!1)),
          (Zo = l()),
          (en = r("br")),
          (tn = l()),
          (ea = r("p")),
          (qr = new h(!1)),
          (an = l()),
          (rn = r("br")),
          (sn = l()),
          (ye = r("a")),
          (Vr = new h(!1)),
          (ln = l()),
          (on = r("br")),
          (nn = l()),
          (cn = r("br")),
          (hn = l()),
          (ta = r("p")),
          (Kr = new h(!1)),
          (un = l()),
          (b = r("section")),
          (dn = r("br")),
          (pn = l()),
          (aa = r("h2")),
          (Gr = new h(!1)),
          (fn = l()),
          (mn = r("br")),
          (bn = l()),
          (ra = r("p")),
          (Jr = new h(!1)),
          (gn = l()),
          (wn = r("br")),
          (vn = l()),
          (ne = r("ul")),
          (sa = r("li")),
          (_e = r("a")),
          (Xr = new h(!1)),
          (yn = l()),
          (la = r("li")),
          (ke = r("a")),
          (Yr = new h(!1)),
          (_n = l()),
          (oa = r("li")),
          (Ee = r("a")),
          (Zr = new h(!1)),
          (kn = l()),
          (na = r("li")),
          (Se = r("a")),
          (es = new h(!1)),
          (En = l()),
          (Sn = r("br")),
          (xn = l()),
          (ia = r("p")),
          (ts = new h(!1)),
          (In = l()),
          (An = r("br")),
          (jn = l()),
          (xe = r("ul")),
          (ca = r("li")),
          (Ie = r("a")),
          (as = new h(!1)),
          (Bn = l()),
          (ha = r("li")),
          (Ae = r("a")),
          (rs = new h(!1)),
          (Tn = l()),
          (ua = r("li")),
          (je = r("a")),
          (ss = new h(!1)),
          (Pn = l()),
          (C = r("section")),
          (Rn = r("br")),
          (Cn = l()),
          (da = r("h2")),
          (ls = new h(!1)),
          (Nn = l()),
          (Ln = r("br")),
          (Fn = l()),
          (pa = r("p")),
          (os = new h(!1)),
          (Dn = l()),
          (pt = r("img")),
          (zn = l()),
          (fa = r("p")),
          (ns = new h(!1)),
          (Hn = l()),
          (X = r("section")),
          (On = r("br")),
          (Wn = l()),
          (ma = r("h2")),
          (is = new h(!1)),
          (Mn = l()),
          ($n = r("br")),
          (Qn = l()),
          (ba = r("p")),
          (cs = new h(!1)),
          (Un = l()),
          (I = r("section")),
          (qn = r("br")),
          (Vn = l()),
          (ga = r("h2")),
          (hs = new h(!1)),
          (Kn = l()),
          (Gn = r("br")),
          (Jn = l()),
          (wa = r("p")),
          (us = new h(!1)),
          (Xn = l()),
          (Yn = r("br")),
          (Zn = l()),
          (ie = r("ul")),
          (va = r("li")),
          (Be = r("a")),
          (ds = new h(!1)),
          (ei = l()),
          (ya = r("li")),
          (Te = r("a")),
          (ps = new h(!1)),
          (ti = l()),
          (_a = r("li")),
          (Pe = r("a")),
          (fs = new h(!1)),
          (ai = l()),
          (ka = r("li")),
          (Re = r("a")),
          (ms = new h(!1)),
          (ri = l()),
          (si = r("br")),
          (li = l()),
          (Y = r("section")),
          (oi = r("br")),
          (ni = l()),
          (Ea = r("h2")),
          (bs = new h(!1)),
          (ii = l()),
          (ci = r("br")),
          (hi = l()),
          (Sa = r("p")),
          (gs = new h(!1)),
          (ui = l()),
          (Z = r("section")),
          (di = r("br")),
          (pi = l()),
          (xa = r("h2")),
          (ws = new h(!1)),
          (fi = l()),
          (mi = r("br")),
          (bi = l()),
          (Ia = r("p")),
          (vs = new h(!1)),
          (gi = l()),
          (g = r("section")),
          (wi = r("br")),
          (vi = l()),
          (Aa = r("h2")),
          (ys = new h(!1)),
          (yi = l()),
          (_i = r("br")),
          (ki = l()),
          (ja = r("p")),
          (_s = new h(!1)),
          (Ei = l()),
          (Si = r("br")),
          (xi = l()),
          (ft = r("ul")),
          (Ba = r("li")),
          (Ce = r("a")),
          (ks = new h(!1)),
          (Ii = l()),
          (Ta = r("li")),
          (Ne = r("a")),
          (Es = new h(!1)),
          (Ai = l()),
          (ji = r("br")),
          (Bi = l()),
          (Pa = r("p")),
          (Ss = new h(!1)),
          (Ti = l()),
          (mt = r("img")),
          (Pi = l()),
          (Ra = r("p")),
          (xs = new h(!1)),
          (Ri = l()),
          (y = r("section")),
          (Ci = r("br")),
          (Ni = l()),
          (Ca = r("h2")),
          (Is = new h(!1)),
          (Li = l()),
          (Fi = r("br")),
          (Di = l()),
          (Na = r("p")),
          (As = new h(!1)),
          (zi = l()),
          (Hi = r("br")),
          (Oi = l()),
          (La = r("p")),
          (js = new h(!1)),
          (Wi = l()),
          (Mi = r("br")),
          ($i = l()),
          (Le = r("a")),
          (Bs = new h(!1)),
          (Qi = l()),
          (A = r("section")),
          (Ui = r("br")),
          (qi = l()),
          (Fa = r("h2")),
          (Ts = new h(!1)),
          (Vi = l()),
          (Ki = r("br")),
          (Gi = l()),
          (Da = r("p")),
          (Ps = new h(!1)),
          (Ji = l()),
          (Xi = r("br")),
          (Yi = l()),
          (D = r("ul")),
          (za = r("li")),
          (Fe = r("a")),
          (Rs = new h(!1)),
          (Zi = l()),
          (Ha = r("li")),
          (De = r("a")),
          (Cs = new h(!1)),
          (ec = l()),
          (Oa = r("li")),
          (ze = r("a")),
          (Ns = new h(!1)),
          (tc = l()),
          (Wa = r("li")),
          (He = r("a")),
          (Ls = new h(!1)),
          (ac = l()),
          (Ma = r("li")),
          (Oe = r("a")),
          (Fs = new h(!1)),
          (rc = l()),
          ($a = r("li")),
          (We = r("a")),
          (Ds = new h(!1)),
          (sc = l()),
          (lc = r("br")),
          (oc = l()),
          (ee = r("section")),
          (nc = r("br")),
          (ic = l()),
          (Qa = r("h2")),
          (zs = new h(!1)),
          (cc = l()),
          (hc = r("br")),
          (uc = l()),
          (Ua = r("p")),
          (Hs = new h(!1)),
          (dc = l()),
          (_ = r("section")),
          (pc = r("br")),
          (fc = l()),
          (qa = r("h2")),
          (Os = new h(!1)),
          (mc = l()),
          (bc = r("br")),
          (gc = l()),
          (Va = r("p")),
          (Ws = new h(!1)),
          (wc = l()),
          (vc = r("br")),
          (yc = l()),
          (bt = r("ul")),
          (Ka = r("li")),
          (Me = r("a")),
          (Ms = new h(!1)),
          (_c = l()),
          (Ga = r("li")),
          ($e = r("a")),
          ($s = new h(!1)),
          (kc = l()),
          (Ec = r("br")),
          (Sc = l()),
          (Ja = r("p")),
          (Qs = new h(!1)),
          (xc = l()),
          (j = r("section")),
          (Ic = r("br")),
          (Ac = l()),
          (Xa = r("h2")),
          (Us = new h(!1)),
          (jc = l()),
          (Bc = r("br")),
          (Tc = l()),
          (Ya = r("p")),
          (qs = new h(!1)),
          (Pc = l()),
          (Rc = r("br")),
          (Cc = l()),
          (gt = r("ul")),
          (Za = r("li")),
          (Qe = r("a")),
          (Vs = new h(!1)),
          (Nc = l()),
          (er = r("li")),
          (Ue = r("a")),
          (Ks = new h(!1)),
          (Lc = l()),
          (Fc = r("br")),
          (Dc = l()),
          (H = r("section")),
          (zc = r("br")),
          (Hc = l()),
          (tr = r("h2")),
          (Gs = new h(!1)),
          (Oc = l()),
          (Wc = r("br")),
          (Mc = l()),
          (ar = r("p")),
          (Js = new h(!1)),
          ($c = l()),
          (wt = r("img")),
          (Qc = l()),
          (cr = r("div")),
          (Uc = l()),
          (te = r("section")),
          (vt = r("p")),
          (vt.textContent = ph),
          (qc = l()),
          (rr = r("h2")),
          (Xs = new h(!1)),
          (Vc = l()),
          (Kc = r("br")),
          (Gc = l()),
          (sr = r("p")),
          (Ys = new h(!1)),
          (Jc = l()),
          (lr = r("div")),
          Kf(yt.$$.fragment),
          this.h();
      },
      l(qe) {
        d = a(qe, "MAIN", { class: !0 });
        var f = n(d);
        Q = a(f, "SECTION", { "aria-label": !0, class: !0 });
        var el = n(Q);
        oe = a(el, "DIV", { class: !0 });
        var mh = n(oe);
        T = a(mh, "DIV", { class: !0 });
        var or = n(T);
        (lt = a(or, "DIV", { class: !0, "data-svelte-h": !0 })),
          hr(lt) !== "svelte-r0u3nn" && (lt.textContent = rh),
          (cl = s(or)),
          (ot = a(or, "P", { class: !0, "data-svelte-h": !0 })),
          hr(ot) !== "svelte-30cvy" && (ot.textContent = sh),
          (hl = s(or)),
          (_t = a(or, "DIV", { class: !0 }));
        var bh = n(_t);
        (ue = a(bh, "BUTTON", { class: !0, style: !0, "data-svelte-h": !0 })),
          hr(ue) !== "svelte-1tq5fl5" && (ue.innerHTML = lh),
          bh.forEach(o),
          or.forEach(o),
          mh.forEach(o),
          (ul = s(el)),
          (nt = a(el, "DIV", { class: !0, "data-svelte-h": !0 })),
          hr(nt) !== "svelte-14037em" && (nt.innerHTML = oh),
          el.forEach(o),
          (dl = s(f)),
          (q = a(f, "SECTION", { class: !0 }));
        var Ve = n(q);
        (pl = a(Ve, "BR", {})), (fl = s(Ve)), (kt = a(Ve, "H2", { class: !0 }));
        var gh = n(kt);
        (pr = c(gh, !1)),
          gh.forEach(o),
          (ml = s(Ve)),
          (bl = a(Ve, "BR", {})),
          (gl = s(Ve)),
          (Et = a(Ve, "P", { class: !0 }));
        var wh = n(Et);
        (fr = c(wh, !1)),
          wh.forEach(o),
          Ve.forEach(o),
          (wl = s(f)),
          (V = a(f, "SECTION", { class: !0 }));
        var Ke = n(V);
        (vl = a(Ke, "BR", {})), (yl = s(Ke)), (St = a(Ke, "H2", { class: !0 }));
        var vh = n(St);
        (mr = c(vh, !1)),
          vh.forEach(o),
          (_l = s(Ke)),
          (kl = a(Ke, "BR", {})),
          (El = s(Ke)),
          (xt = a(Ke, "P", { class: !0 }));
        var yh = n(xt);
        (br = c(yh, !1)),
          yh.forEach(o),
          Ke.forEach(o),
          (Sl = s(f)),
          (v = a(f, "SECTION", { class: !0 }));
        var N = n(v);
        (xl = a(N, "BR", {})), (Il = s(N)), (It = a(N, "H2", { class: !0 }));
        var _h = n(It);
        (gr = c(_h, !1)),
          _h.forEach(o),
          (Al = s(N)),
          (jl = a(N, "BR", {})),
          (Bl = s(N)),
          (At = a(N, "P", { class: !0 }));
        var kh = n(At);
        (wr = c(kh, !1)),
          kh.forEach(o),
          (Tl = s(N)),
          (it = a(N, "IMG", { src: !0, alt: !0, class: !0 })),
          (Pl = s(N)),
          (jt = a(N, "P", { class: !0 }));
        var Eh = n(jt);
        (vr = c(Eh, !1)),
          Eh.forEach(o),
          (Rl = s(N)),
          (Cl = a(N, "BR", {})),
          (Nl = s(N)),
          (ct = a(N, "UL", {}));
        var tl = n(ct);
        Bt = a(tl, "LI", { class: !0 });
        var Sh = n(Bt);
        de = a(Sh, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var xh = n(de);
        (yr = c(xh, !1)),
          xh.forEach(o),
          Sh.forEach(o),
          (Ll = s(tl)),
          (Tt = a(tl, "LI", { class: !0 }));
        var Ih = n(Tt);
        pe = a(Ih, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Ah = n(pe);
        (_r = c(Ah, !1)),
          Ah.forEach(o),
          Ih.forEach(o),
          tl.forEach(o),
          N.forEach(o),
          (Fl = s(f)),
          (K = a(f, "SECTION", { class: !0 }));
        var Ge = n(K);
        (Dl = a(Ge, "BR", {})), (zl = s(Ge)), (Pt = a(Ge, "H2", { class: !0 }));
        var jh = n(Pt);
        (kr = c(jh, !1)),
          jh.forEach(o),
          (Hl = s(Ge)),
          (Ol = a(Ge, "BR", {})),
          (Wl = s(Ge)),
          (Rt = a(Ge, "P", { class: !0 }));
        var Bh = n(Rt);
        (Er = c(Bh, !1)),
          Bh.forEach(o),
          Ge.forEach(o),
          (Ml = s(f)),
          (G = a(f, "SECTION", { class: !0 }));
        var Je = n(G);
        ($l = a(Je, "BR", {})), (Ql = s(Je)), (Ct = a(Je, "H2", { class: !0 }));
        var Th = n(Ct);
        (Sr = c(Th, !1)),
          Th.forEach(o),
          (Ul = s(Je)),
          (ql = a(Je, "BR", {})),
          (Vl = s(Je)),
          (Nt = a(Je, "P", { class: !0 }));
        var Ph = n(Nt);
        (xr = c(Ph, !1)),
          Ph.forEach(o),
          Je.forEach(o),
          (Kl = s(f)),
          (m = a(f, "SECTION", { class: !0 }));
        var k = n(m);
        (Gl = a(k, "BR", {})), (Jl = s(k)), (Lt = a(k, "H2", { class: !0 }));
        var Rh = n(Lt);
        (Ir = c(Rh, !1)),
          Rh.forEach(o),
          (Xl = s(k)),
          (Yl = a(k, "BR", {})),
          (Zl = s(k)),
          (Ft = a(k, "P", { class: !0 }));
        var Ch = n(Ft);
        (Ar = c(Ch, !1)), Ch.forEach(o), (eo = s(k)), (U = a(k, "UL", {}));
        var ce = n(U);
        (to = a(ce, "BR", {})),
          (ao = s(ce)),
          (ro = a(ce, "BR", {})),
          (so = s(ce)),
          (Dt = a(ce, "LI", { class: !0 }));
        var Nh = n(Dt);
        fe = a(Nh, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Lh = n(fe);
        (jr = c(Lh, !1)),
          Lh.forEach(o),
          Nh.forEach(o),
          (lo = s(ce)),
          (zt = a(ce, "LI", { class: !0 }));
        var Fh = n(zt);
        me = a(Fh, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Dh = n(me);
        (Br = c(Dh, !1)),
          Dh.forEach(o),
          Fh.forEach(o),
          (oo = s(ce)),
          (Ht = a(ce, "LI", { class: !0 }));
        var zh = n(Ht);
        be = a(zh, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Hh = n(be);
        (Tr = c(Hh, !1)),
          Hh.forEach(o),
          zh.forEach(o),
          ce.forEach(o),
          (no = s(k)),
          (io = a(k, "BR", {})),
          (co = s(k)),
          (ho = a(k, "BR", {})),
          (uo = s(k)),
          (Ot = a(k, "P", { class: !0 }));
        var Oh = n(Ot);
        (Pr = c(Oh, !1)),
          Oh.forEach(o),
          (po = s(k)),
          (ht = a(k, "IMG", { src: !0, alt: !0, class: !0 })),
          (fo = s(k)),
          (Wt = a(k, "P", { class: !0 }));
        var Wh = n(Wt);
        (Rr = c(Wh, !1)),
          Wh.forEach(o),
          k.forEach(o),
          (mo = s(f)),
          (P = a(f, "SECTION", { class: !0 }));
        var ae = n(P);
        (bo = a(ae, "BR", {})), (go = s(ae)), (Mt = a(ae, "H2", { class: !0 }));
        var Mh = n(Mt);
        (Cr = c(Mh, !1)),
          Mh.forEach(o),
          (wo = s(ae)),
          (vo = a(ae, "BR", {})),
          (yo = s(ae)),
          ($t = a(ae, "P", { class: !0 }));
        var $h = n($t);
        (Nr = c($h, !1)),
          $h.forEach(o),
          (_o = s(ae)),
          (ut = a(ae, "IMG", { src: !0, alt: !0, class: !0 })),
          (ko = s(ae)),
          (Qt = a(ae, "P", { class: !0 }));
        var Qh = n(Qt);
        (Lr = c(Qh, !1)),
          Qh.forEach(o),
          ae.forEach(o),
          (Eo = s(f)),
          (R = a(f, "SECTION", { class: !0 }));
        var re = n(R);
        (So = a(re, "BR", {})), (xo = s(re)), (Ut = a(re, "H2", { class: !0 }));
        var Uh = n(Ut);
        (Fr = c(Uh, !1)),
          Uh.forEach(o),
          (Io = s(re)),
          (Ao = a(re, "BR", {})),
          (jo = s(re)),
          (qt = a(re, "P", { class: !0 }));
        var qh = n(qt);
        (Dr = c(qh, !1)),
          qh.forEach(o),
          (Bo = s(re)),
          (To = a(re, "BR", {})),
          (Po = s(re)),
          (ge = a(re, "A", { href: !0, class: !0, target: !0, rel: !0 }));
        var Vh = n(ge);
        (zr = c(Vh, !1)),
          Vh.forEach(o),
          re.forEach(o),
          (Ro = s(f)),
          (x = a(f, "SECTION", { class: !0 }));
        var O = n(x);
        (Co = a(O, "BR", {})), (No = s(O)), (Vt = a(O, "H2", { class: !0 }));
        var Kh = n(Vt);
        (Hr = c(Kh, !1)),
          Kh.forEach(o),
          (Lo = s(O)),
          (Fo = a(O, "BR", {})),
          (Do = s(O)),
          (Kt = a(O, "P", { class: !0 }));
        var Gh = n(Kt);
        (Or = c(Gh, !1)),
          Gh.forEach(o),
          (zo = s(O)),
          (Ho = a(O, "BR", {})),
          (Oo = s(O)),
          (dt = a(O, "UL", {}));
        var al = n(dt);
        Gt = a(al, "LI", { class: !0 });
        var Jh = n(Gt);
        we = a(Jh, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Xh = n(we);
        (Wr = c(Xh, !1)),
          Xh.forEach(o),
          Jh.forEach(o),
          (Wo = s(al)),
          (Jt = a(al, "LI", { class: !0 }));
        var Yh = n(Jt);
        ve = a(Yh, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Zh = n(ve);
        (Mr = c(Zh, !1)),
          Zh.forEach(o),
          Yh.forEach(o),
          al.forEach(o),
          (Mo = s(O)),
          ($o = a(O, "BR", {})),
          O.forEach(o),
          (Qo = s(f)),
          (J = a(f, "SECTION", { class: !0 }));
        var Xe = n(J);
        (Uo = a(Xe, "BR", {})), (qo = s(Xe)), (Xt = a(Xe, "H2", { class: !0 }));
        var eu = n(Xt);
        ($r = c(eu, !1)),
          eu.forEach(o),
          (Vo = s(Xe)),
          (Ko = a(Xe, "BR", {})),
          (Go = s(Xe)),
          (Yt = a(Xe, "P", { class: !0 }));
        var tu = n(Yt);
        (Qr = c(tu, !1)),
          tu.forEach(o),
          Xe.forEach(o),
          (Jo = s(f)),
          (w = a(f, "SECTION", { class: !0 }));
        var B = n(w);
        (Xo = a(B, "BR", {})), (Yo = s(B)), (Zt = a(B, "H2", { class: !0 }));
        var au = n(Zt);
        (Ur = c(au, !1)),
          au.forEach(o),
          (Zo = s(B)),
          (en = a(B, "BR", {})),
          (tn = s(B)),
          (ea = a(B, "P", { class: !0 }));
        var ru = n(ea);
        (qr = c(ru, !1)),
          ru.forEach(o),
          (an = s(B)),
          (rn = a(B, "BR", {})),
          (sn = s(B)),
          (ye = a(B, "A", { href: !0, class: !0, target: !0, rel: !0 }));
        var su = n(ye);
        (Vr = c(su, !1)),
          su.forEach(o),
          (ln = s(B)),
          (on = a(B, "BR", {})),
          (nn = s(B)),
          (cn = a(B, "BR", {})),
          (hn = s(B)),
          (ta = a(B, "P", { class: !0 }));
        var lu = n(ta);
        (Kr = c(lu, !1)),
          lu.forEach(o),
          B.forEach(o),
          (un = s(f)),
          (b = a(f, "SECTION", { class: !0 }));
        var E = n(b);
        (dn = a(E, "BR", {})), (pn = s(E)), (aa = a(E, "H2", { class: !0 }));
        var ou = n(aa);
        (Gr = c(ou, !1)),
          ou.forEach(o),
          (fn = s(E)),
          (mn = a(E, "BR", {})),
          (bn = s(E)),
          (ra = a(E, "P", { class: !0 }));
        var nu = n(ra);
        (Jr = c(nu, !1)),
          nu.forEach(o),
          (gn = s(E)),
          (wn = a(E, "BR", {})),
          (vn = s(E)),
          (ne = a(E, "UL", {}));
        var Ye = n(ne);
        sa = a(Ye, "LI", { class: !0 });
        var iu = n(sa);
        _e = a(iu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var cu = n(_e);
        (Xr = c(cu, !1)),
          cu.forEach(o),
          iu.forEach(o),
          (yn = s(Ye)),
          (la = a(Ye, "LI", { class: !0 }));
        var hu = n(la);
        ke = a(hu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var uu = n(ke);
        (Yr = c(uu, !1)),
          uu.forEach(o),
          hu.forEach(o),
          (_n = s(Ye)),
          (oa = a(Ye, "LI", { class: !0 }));
        var du = n(oa);
        Ee = a(du, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var pu = n(Ee);
        (Zr = c(pu, !1)),
          pu.forEach(o),
          du.forEach(o),
          (kn = s(Ye)),
          (na = a(Ye, "LI", { class: !0 }));
        var fu = n(na);
        Se = a(fu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var mu = n(Se);
        (es = c(mu, !1)),
          mu.forEach(o),
          fu.forEach(o),
          Ye.forEach(o),
          (En = s(E)),
          (Sn = a(E, "BR", {})),
          (xn = s(E)),
          (ia = a(E, "P", { class: !0 }));
        var bu = n(ia);
        (ts = c(bu, !1)),
          bu.forEach(o),
          (In = s(E)),
          (An = a(E, "BR", {})),
          (jn = s(E)),
          (xe = a(E, "UL", {}));
        var nr = n(xe);
        ca = a(nr, "LI", { class: !0 });
        var gu = n(ca);
        Ie = a(gu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var wu = n(Ie);
        (as = c(wu, !1)),
          wu.forEach(o),
          gu.forEach(o),
          (Bn = s(nr)),
          (ha = a(nr, "LI", { class: !0 }));
        var vu = n(ha);
        Ae = a(vu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var yu = n(Ae);
        (rs = c(yu, !1)),
          yu.forEach(o),
          vu.forEach(o),
          (Tn = s(nr)),
          (ua = a(nr, "LI", { class: !0 }));
        var _u = n(ua);
        je = a(_u, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var ku = n(je);
        (ss = c(ku, !1)),
          ku.forEach(o),
          _u.forEach(o),
          nr.forEach(o),
          E.forEach(o),
          (Pn = s(f)),
          (C = a(f, "SECTION", { class: !0 }));
        var se = n(C);
        (Rn = a(se, "BR", {})), (Cn = s(se)), (da = a(se, "H2", { class: !0 }));
        var Eu = n(da);
        (ls = c(Eu, !1)),
          Eu.forEach(o),
          (Nn = s(se)),
          (Ln = a(se, "BR", {})),
          (Fn = s(se)),
          (pa = a(se, "P", { class: !0 }));
        var Su = n(pa);
        (os = c(Su, !1)),
          Su.forEach(o),
          (Dn = s(se)),
          (pt = a(se, "IMG", { src: !0, alt: !0, class: !0 })),
          (zn = s(se)),
          (fa = a(se, "P", { class: !0 }));
        var xu = n(fa);
        (ns = c(xu, !1)),
          xu.forEach(o),
          se.forEach(o),
          (Hn = s(f)),
          (X = a(f, "SECTION", { class: !0 }));
        var Ze = n(X);
        (On = a(Ze, "BR", {})), (Wn = s(Ze)), (ma = a(Ze, "H2", { class: !0 }));
        var Iu = n(ma);
        (is = c(Iu, !1)),
          Iu.forEach(o),
          (Mn = s(Ze)),
          ($n = a(Ze, "BR", {})),
          (Qn = s(Ze)),
          (ba = a(Ze, "P", { class: !0 }));
        var Au = n(ba);
        (cs = c(Au, !1)),
          Au.forEach(o),
          Ze.forEach(o),
          (Un = s(f)),
          (I = a(f, "SECTION", { class: !0 }));
        var W = n(I);
        (qn = a(W, "BR", {})), (Vn = s(W)), (ga = a(W, "H2", { class: !0 }));
        var ju = n(ga);
        (hs = c(ju, !1)),
          ju.forEach(o),
          (Kn = s(W)),
          (Gn = a(W, "BR", {})),
          (Jn = s(W)),
          (wa = a(W, "P", { class: !0 }));
        var Bu = n(wa);
        (us = c(Bu, !1)),
          Bu.forEach(o),
          (Xn = s(W)),
          (Yn = a(W, "BR", {})),
          (Zn = s(W)),
          (ie = a(W, "UL", {}));
        var et = n(ie);
        va = a(et, "LI", { class: !0 });
        var Tu = n(va);
        Be = a(Tu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Pu = n(Be);
        (ds = c(Pu, !1)),
          Pu.forEach(o),
          Tu.forEach(o),
          (ei = s(et)),
          (ya = a(et, "LI", { class: !0 }));
        var Ru = n(ya);
        Te = a(Ru, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Cu = n(Te);
        (ps = c(Cu, !1)),
          Cu.forEach(o),
          Ru.forEach(o),
          (ti = s(et)),
          (_a = a(et, "LI", { class: !0 }));
        var Nu = n(_a);
        Pe = a(Nu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Lu = n(Pe);
        (fs = c(Lu, !1)),
          Lu.forEach(o),
          Nu.forEach(o),
          (ai = s(et)),
          (ka = a(et, "LI", { class: !0 }));
        var Fu = n(ka);
        Re = a(Fu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Du = n(Re);
        (ms = c(Du, !1)),
          Du.forEach(o),
          Fu.forEach(o),
          et.forEach(o),
          (ri = s(W)),
          (si = a(W, "BR", {})),
          W.forEach(o),
          (li = s(f)),
          (Y = a(f, "SECTION", { class: !0 }));
        var tt = n(Y);
        (oi = a(tt, "BR", {})), (ni = s(tt)), (Ea = a(tt, "H2", { class: !0 }));
        var zu = n(Ea);
        (bs = c(zu, !1)),
          zu.forEach(o),
          (ii = s(tt)),
          (ci = a(tt, "BR", {})),
          (hi = s(tt)),
          (Sa = a(tt, "P", { class: !0 }));
        var Hu = n(Sa);
        (gs = c(Hu, !1)),
          Hu.forEach(o),
          tt.forEach(o),
          (ui = s(f)),
          (Z = a(f, "SECTION", { class: !0 }));
        var at = n(Z);
        (di = a(at, "BR", {})), (pi = s(at)), (xa = a(at, "H2", { class: !0 }));
        var Ou = n(xa);
        (ws = c(Ou, !1)),
          Ou.forEach(o),
          (fi = s(at)),
          (mi = a(at, "BR", {})),
          (bi = s(at)),
          (Ia = a(at, "P", { class: !0 }));
        var Wu = n(Ia);
        (vs = c(Wu, !1)),
          Wu.forEach(o),
          at.forEach(o),
          (gi = s(f)),
          (g = a(f, "SECTION", { class: !0 }));
        var S = n(g);
        (wi = a(S, "BR", {})), (vi = s(S)), (Aa = a(S, "H2", { class: !0 }));
        var Mu = n(Aa);
        (ys = c(Mu, !1)),
          Mu.forEach(o),
          (yi = s(S)),
          (_i = a(S, "BR", {})),
          (ki = s(S)),
          (ja = a(S, "P", { class: !0 }));
        var $u = n(ja);
        (_s = c($u, !1)),
          $u.forEach(o),
          (Ei = s(S)),
          (Si = a(S, "BR", {})),
          (xi = s(S)),
          (ft = a(S, "UL", {}));
        var rl = n(ft);
        Ba = a(rl, "LI", { class: !0 });
        var Qu = n(Ba);
        Ce = a(Qu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Uu = n(Ce);
        (ks = c(Uu, !1)),
          Uu.forEach(o),
          Qu.forEach(o),
          (Ii = s(rl)),
          (Ta = a(rl, "LI", { class: !0 }));
        var qu = n(Ta);
        Ne = a(qu, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Vu = n(Ne);
        (Es = c(Vu, !1)),
          Vu.forEach(o),
          qu.forEach(o),
          rl.forEach(o),
          (Ai = s(S)),
          (ji = a(S, "BR", {})),
          (Bi = s(S)),
          (Pa = a(S, "P", { class: !0 }));
        var Ku = n(Pa);
        (Ss = c(Ku, !1)),
          Ku.forEach(o),
          (Ti = s(S)),
          (mt = a(S, "IMG", { src: !0, alt: !0, class: !0 })),
          (Pi = s(S)),
          (Ra = a(S, "P", { class: !0 }));
        var Gu = n(Ra);
        (xs = c(Gu, !1)),
          Gu.forEach(o),
          S.forEach(o),
          (Ri = s(f)),
          (y = a(f, "SECTION", { class: !0 }));
        var L = n(y);
        (Ci = a(L, "BR", {})), (Ni = s(L)), (Ca = a(L, "H2", { class: !0 }));
        var Ju = n(Ca);
        (Is = c(Ju, !1)),
          Ju.forEach(o),
          (Li = s(L)),
          (Fi = a(L, "BR", {})),
          (Di = s(L)),
          (Na = a(L, "P", { class: !0 }));
        var Xu = n(Na);
        (As = c(Xu, !1)),
          Xu.forEach(o),
          (zi = s(L)),
          (Hi = a(L, "BR", {})),
          (Oi = s(L)),
          (La = a(L, "P", { class: !0 }));
        var Yu = n(La);
        (js = c(Yu, !1)),
          Yu.forEach(o),
          (Wi = s(L)),
          (Mi = a(L, "BR", {})),
          ($i = s(L)),
          (Le = a(L, "A", { href: !0, class: !0, target: !0, rel: !0 }));
        var Zu = n(Le);
        (Bs = c(Zu, !1)),
          Zu.forEach(o),
          L.forEach(o),
          (Qi = s(f)),
          (A = a(f, "SECTION", { class: !0 }));
        var M = n(A);
        (Ui = a(M, "BR", {})), (qi = s(M)), (Fa = a(M, "H2", { class: !0 }));
        var ed = n(Fa);
        (Ts = c(ed, !1)),
          ed.forEach(o),
          (Vi = s(M)),
          (Ki = a(M, "BR", {})),
          (Gi = s(M)),
          (Da = a(M, "P", { class: !0 }));
        var td = n(Da);
        (Ps = c(td, !1)),
          td.forEach(o),
          (Ji = s(M)),
          (Xi = a(M, "BR", {})),
          (Yi = s(M)),
          (D = a(M, "UL", {}));
        var le = n(D);
        za = a(le, "LI", { class: !0 });
        var ad = n(za);
        Fe = a(ad, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var rd = n(Fe);
        (Rs = c(rd, !1)),
          rd.forEach(o),
          ad.forEach(o),
          (Zi = s(le)),
          (Ha = a(le, "LI", { class: !0 }));
        var sd = n(Ha);
        De = a(sd, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var ld = n(De);
        (Cs = c(ld, !1)),
          ld.forEach(o),
          sd.forEach(o),
          (ec = s(le)),
          (Oa = a(le, "LI", { class: !0 }));
        var od = n(Oa);
        ze = a(od, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var nd = n(ze);
        (Ns = c(nd, !1)),
          nd.forEach(o),
          od.forEach(o),
          (tc = s(le)),
          (Wa = a(le, "LI", { class: !0 }));
        var id = n(Wa);
        He = a(id, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var cd = n(He);
        (Ls = c(cd, !1)),
          cd.forEach(o),
          id.forEach(o),
          (ac = s(le)),
          (Ma = a(le, "LI", { class: !0 }));
        var hd = n(Ma);
        Oe = a(hd, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var ud = n(Oe);
        (Fs = c(ud, !1)),
          ud.forEach(o),
          hd.forEach(o),
          (rc = s(le)),
          ($a = a(le, "LI", { class: !0 }));
        var dd = n($a);
        We = a(dd, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var pd = n(We);
        (Ds = c(pd, !1)),
          pd.forEach(o),
          dd.forEach(o),
          le.forEach(o),
          (sc = s(M)),
          (lc = a(M, "BR", {})),
          M.forEach(o),
          (oc = s(f)),
          (ee = a(f, "SECTION", { class: !0 }));
        var rt = n(ee);
        (nc = a(rt, "BR", {})), (ic = s(rt)), (Qa = a(rt, "H2", { class: !0 }));
        var fd = n(Qa);
        (zs = c(fd, !1)),
          fd.forEach(o),
          (cc = s(rt)),
          (hc = a(rt, "BR", {})),
          (uc = s(rt)),
          (Ua = a(rt, "P", { class: !0 }));
        var md = n(Ua);
        (Hs = c(md, !1)),
          md.forEach(o),
          rt.forEach(o),
          (dc = s(f)),
          (_ = a(f, "SECTION", { class: !0 }));
        var F = n(_);
        (pc = a(F, "BR", {})), (fc = s(F)), (qa = a(F, "H2", { class: !0 }));
        var bd = n(qa);
        (Os = c(bd, !1)),
          bd.forEach(o),
          (mc = s(F)),
          (bc = a(F, "BR", {})),
          (gc = s(F)),
          (Va = a(F, "P", { class: !0 }));
        var gd = n(Va);
        (Ws = c(gd, !1)),
          gd.forEach(o),
          (wc = s(F)),
          (vc = a(F, "BR", {})),
          (yc = s(F)),
          (bt = a(F, "UL", {}));
        var sl = n(bt);
        Ka = a(sl, "LI", { class: !0 });
        var wd = n(Ka);
        Me = a(wd, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var vd = n(Me);
        (Ms = c(vd, !1)),
          vd.forEach(o),
          wd.forEach(o),
          (_c = s(sl)),
          (Ga = a(sl, "LI", { class: !0 }));
        var yd = n(Ga);
        $e = a(yd, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var _d = n($e);
        ($s = c(_d, !1)),
          _d.forEach(o),
          yd.forEach(o),
          sl.forEach(o),
          (kc = s(F)),
          (Ec = a(F, "BR", {})),
          (Sc = s(F)),
          (Ja = a(F, "P", { class: !0 }));
        var kd = n(Ja);
        (Qs = c(kd, !1)),
          kd.forEach(o),
          F.forEach(o),
          (xc = s(f)),
          (j = a(f, "SECTION", { class: !0 }));
        var $ = n(j);
        (Ic = a($, "BR", {})), (Ac = s($)), (Xa = a($, "H2", { class: !0 }));
        var Ed = n(Xa);
        (Us = c(Ed, !1)),
          Ed.forEach(o),
          (jc = s($)),
          (Bc = a($, "BR", {})),
          (Tc = s($)),
          (Ya = a($, "P", { class: !0 }));
        var Sd = n(Ya);
        (qs = c(Sd, !1)),
          Sd.forEach(o),
          (Pc = s($)),
          (Rc = a($, "BR", {})),
          (Cc = s($)),
          (gt = a($, "UL", {}));
        var ll = n(gt);
        Za = a(ll, "LI", { class: !0 });
        var xd = n(Za);
        Qe = a(xd, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var Id = n(Qe);
        (Vs = c(Id, !1)),
          Id.forEach(o),
          xd.forEach(o),
          (Nc = s(ll)),
          (er = a(ll, "LI", { class: !0 }));
        var Ad = n(er);
        Ue = a(Ad, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var jd = n(Ue);
        (Ks = c(jd, !1)),
          jd.forEach(o),
          Ad.forEach(o),
          ll.forEach(o),
          (Lc = s($)),
          (Fc = a($, "BR", {})),
          $.forEach(o),
          (Dc = s(f)),
          (H = a(f, "SECTION", { class: !0 }));
        var he = n(H);
        (zc = a(he, "BR", {})), (Hc = s(he)), (tr = a(he, "H2", { class: !0 }));
        var Bd = n(tr);
        (Gs = c(Bd, !1)),
          Bd.forEach(o),
          (Oc = s(he)),
          (Wc = a(he, "BR", {})),
          (Mc = s(he)),
          (ar = a(he, "P", { class: !0 }));
        var Td = n(ar);
        (Js = c(Td, !1)),
          Td.forEach(o),
          ($c = s(he)),
          (wt = a(he, "IMG", { src: !0, alt: !0, class: !0 })),
          he.forEach(o),
          (Qc = s(f)),
          (cr = a(f, "DIV", { class: !0 })),
          n(cr).forEach(o),
          (Uc = s(f)),
          (te = a(f, "SECTION", { class: !0 }));
        var st = n(te);
        (vt = a(st, "P", { class: !0, "data-svelte-h": !0 })),
          hr(vt) !== "svelte-p4bjgw" && (vt.textContent = ph),
          (qc = s(st)),
          (rr = a(st, "H2", { class: !0 }));
        var Pd = n(rr);
        (Xs = c(Pd, !1)),
          Pd.forEach(o),
          (Vc = s(st)),
          (Kc = a(st, "BR", {})),
          (Gc = s(st)),
          (sr = a(st, "P", { class: !0 }));
        var Rd = n(sr);
        (Ys = c(Rd, !1)),
          Rd.forEach(o),
          st.forEach(o),
          (Jc = s(f)),
          (lr = a(f, "DIV", { class: !0 }));
        var Cd = n(lr);
        Vf(yt.$$.fragment, Cd), Cd.forEach(o), f.forEach(o), this.h();
      },
      h() {
        t(
          lt,
          "class",
          z("xs:text-6xl ml-[-3px] px-4 text-5xl font-bold leading-[1]")
        ),
          t(
            ot,
            "class",
            u(z("xs:text-base  px-4 text-sm")) + " svelte-1jrib63"
          ),
          t(
            ue,
            "class",
            "group relative flex items-center justify-center overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-[var(--line-color)] before:transition-transform before:duration-300 hover:before:translate-x-0"
          ),
          Of(ue, "border-color", "var(--line-color)"),
          t(
            _t,
            "class",
            "border-border -mr-[1px] ml-auto mt-3 border-x border-t font-[500]"
          ),
          t(T, "class", "flex w-full flex-col"),
          t(oe, "class", z("border-border -mx-4  border-b")),
          t(nt, "class", z("max-w-5xl pt-10")),
          t(Q, "aria-label", "Hero section"),
          t(Q, "class", "pt-24 md:pt-32"),
          (pr.a = null),
          t(kt, "class", u(i[0]) + " svelte-1jrib63"),
          (fr.a = null),
          t(Et, "class", u(i[1]) + " svelte-1jrib63"),
          t(q, "class", "max-w-5xl"),
          (mr.a = null),
          t(St, "class", u(i[0]) + " svelte-1jrib63"),
          (br.a = null),
          t(xt, "class", u(i[1]) + " svelte-1jrib63"),
          t(V, "class", "max-w-5xl"),
          (gr.a = null),
          t(It, "class", u(i[0]) + " svelte-1jrib63"),
          (wr.a = null),
          t(At, "class", u(i[1]) + " svelte-1jrib63"),
          ir(it.src, (nh = ol.picture)) || t(it, "src", nh),
          t(it, "alt", ""),
          t(
            it,
            "class",
            u(
              z(
                "xs:my-10 mx-auto my-10 my-6 aspect-[700/1114] w-4/5 w-full sm:w-4/5 lg:my-16 lg:w-3/5"
              )
            ) + " svelte-1jrib63"
          ),
          (vr.a = null),
          t(jt, "class", u(i[1]) + " svelte-1jrib63"),
          (yr.a = null),
          t(de, "href", p[1]),
          t(de, "class", i[2]),
          t(de, "target", "_blank"),
          t(de, "rel", "noopener noreferrer"),
          t(Bt, "class", "-mt-1"),
          (_r.a = null),
          t(pe, "href", p[2]),
          t(pe, "class", i[2]),
          t(pe, "target", "_blank"),
          t(pe, "rel", "noopener noreferrer"),
          t(Tt, "class", "-mt-1"),
          t(v, "class", "max-w-5xl"),
          (kr.a = null),
          t(Pt, "class", u(i[0]) + " svelte-1jrib63"),
          (Er.a = null),
          t(Rt, "class", u(i[1]) + " svelte-1jrib63"),
          t(K, "class", "max-w-5xl"),
          (Sr.a = null),
          t(Ct, "class", u(i[0]) + " svelte-1jrib63"),
          (xr.a = null),
          t(Nt, "class", u(i[1]) + " svelte-1jrib63"),
          t(G, "class", "max-w-5xl"),
          (Ir.a = null),
          t(Lt, "class", u(i[0]) + " svelte-1jrib63"),
          (Ar.a = null),
          t(Ft, "class", u(i[1]) + " svelte-1jrib63"),
          (jr.a = null),
          t(fe, "href", p[3]),
          t(fe, "class", i[2]),
          t(fe, "target", "_blank"),
          t(fe, "rel", "noopener noreferrer"),
          t(Dt, "class", "-mt-1"),
          (Br.a = null),
          t(me, "href", p[4]),
          t(me, "class", i[2]),
          t(me, "target", "_blank"),
          t(me, "rel", "noopener noreferrer"),
          t(zt, "class", "-mt-1"),
          (Tr.a = null),
          t(be, "href", p[5]),
          t(be, "class", i[2]),
          t(be, "target", "_blank"),
          t(be, "rel", "noopener noreferrer"),
          t(Ht, "class", "-mt-1"),
          (Pr.a = null),
          t(Ot, "class", u(i[1]) + " svelte-1jrib63"),
          ir(ht.src, (ih = ur.picture)) || t(ht, "src", ih),
          t(ht, "alt", ""),
          t(
            ht,
            "class",
            u(
              z(
                "xs:my-10 mx-auto my-10 my-6 aspect-[875/542] lg:my-16 lg:w-4/5"
              )
            ) + " svelte-1jrib63"
          ),
          (Rr.a = null),
          t(Wt, "class", u(i[1]) + " svelte-1jrib63"),
          t(m, "class", "max-w-5xl"),
          (Cr.a = null),
          t(Mt, "class", u(i[0]) + " svelte-1jrib63"),
          (Nr.a = null),
          t($t, "class", u(i[1]) + " svelte-1jrib63"),
          ir(ut.src, (ch = nl.picture)) || t(ut, "src", ch),
          t(ut, "alt", ""),
          t(
            ut,
            "class",
            u(
              z(
                "xs:my-10 mx-auto my-10 my-6 aspect-[875/538] lg:my-16 lg:w-4/5"
              )
            ) + " svelte-1jrib63"
          ),
          (Lr.a = null),
          t(Qt, "class", u(i[1]) + " svelte-1jrib63"),
          t(P, "class", "max-w-5xl"),
          (Fr.a = null),
          t(Ut, "class", u(i[0]) + " svelte-1jrib63"),
          (Dr.a = null),
          t(qt, "class", u(i[1]) + " svelte-1jrib63"),
          (zr.a = null),
          t(ge, "href", p[6]),
          t(ge, "class", i[2]),
          t(ge, "target", "_blank"),
          t(ge, "rel", "noopener noreferrer"),
          t(R, "class", "max-w-5xl"),
          (Hr.a = null),
          t(Vt, "class", u(i[0]) + " svelte-1jrib63"),
          (Or.a = null),
          t(Kt, "class", u(i[1]) + " svelte-1jrib63"),
          (Wr.a = null),
          t(we, "href", p[7]),
          t(we, "class", i[2]),
          t(we, "target", "_blank"),
          t(we, "rel", "noopener noreferrer"),
          t(Gt, "class", "-mt-1"),
          (Mr.a = null),
          t(ve, "href", p[8]),
          t(ve, "class", i[2]),
          t(ve, "target", "_blank"),
          t(ve, "rel", "noopener noreferrer"),
          t(Jt, "class", "-mt-1"),
          t(x, "class", "max-w-5xl"),
          ($r.a = null),
          t(Xt, "class", u(i[0]) + " svelte-1jrib63"),
          (Qr.a = null),
          t(Yt, "class", u(i[1]) + " svelte-1jrib63"),
          t(J, "class", "max-w-5xl"),
          (Ur.a = null),
          t(Zt, "class", u(i[0]) + " svelte-1jrib63"),
          (qr.a = null),
          t(ea, "class", u(i[1]) + " svelte-1jrib63"),
          (Vr.a = null),
          t(ye, "href", p[9]),
          t(ye, "class", i[2]),
          t(ye, "target", "_blank"),
          t(ye, "rel", "noopener noreferrer"),
          (Kr.a = null),
          t(ta, "class", u(i[1]) + " svelte-1jrib63"),
          t(w, "class", "max-w-5xl"),
          (Gr.a = null),
          t(aa, "class", u(i[0]) + " svelte-1jrib63"),
          (Jr.a = null),
          t(ra, "class", u(i[1]) + " svelte-1jrib63"),
          (Xr.a = null),
          t(_e, "href", p[10]),
          t(_e, "class", i[2]),
          t(_e, "target", "_blank"),
          t(_e, "rel", "noopener noreferrer"),
          t(sa, "class", "-mt-1"),
          (Yr.a = null),
          t(ke, "href", p[11]),
          t(ke, "class", i[2]),
          t(ke, "target", "_blank"),
          t(ke, "rel", "noopener noreferrer"),
          t(la, "class", "-mt-1"),
          (Zr.a = null),
          t(Ee, "href", p[12]),
          t(Ee, "class", i[2]),
          t(Ee, "target", "_blank"),
          t(Ee, "rel", "noopener noreferrer"),
          t(oa, "class", "-mt-1"),
          (es.a = null),
          t(Se, "href", p[13]),
          t(Se, "class", i[2]),
          t(Se, "target", "_blank"),
          t(Se, "rel", "noopener noreferrer"),
          t(na, "class", "-mt-1"),
          (ts.a = null),
          t(ia, "class", u(i[1]) + " svelte-1jrib63"),
          (as.a = null),
          t(Ie, "href", p[14]),
          t(Ie, "class", i[2]),
          t(Ie, "target", "_blank"),
          t(Ie, "rel", "noopener noreferrer"),
          t(ca, "class", "-mt-1"),
          (rs.a = null),
          t(Ae, "href", p[15]),
          t(Ae, "class", i[2]),
          t(Ae, "target", "_blank"),
          t(Ae, "rel", "noopener noreferrer"),
          t(ha, "class", "-mt-1"),
          (ss.a = null),
          t(je, "href", p[16]),
          t(je, "class", i[2]),
          t(je, "target", "_blank"),
          t(je, "rel", "noopener noreferrer"),
          t(ua, "class", "-mt-1"),
          t(b, "class", "max-w-5xl"),
          (ls.a = null),
          t(da, "class", u(i[0]) + " svelte-1jrib63"),
          (os.a = null),
          t(pa, "class", u(i[1]) + " svelte-1jrib63"),
          ir(pt.src, (hh = il.picture)) || t(pt, "src", hh),
          t(pt, "alt", ""),
          t(
            pt,
            "class",
            u(
              z(
                "xs:my-10 mx-auto my-10 my-6 aspect-[875/653] lg:my-16 lg:w-4/5"
              )
            ) + " svelte-1jrib63"
          ),
          (ns.a = null),
          t(fa, "class", u(i[1]) + " svelte-1jrib63"),
          t(C, "class", "max-w-5xl"),
          (is.a = null),
          t(ma, "class", u(i[0]) + " svelte-1jrib63"),
          (cs.a = null),
          t(ba, "class", u(i[1]) + " svelte-1jrib63"),
          t(X, "class", "max-w-5xl"),
          (hs.a = null),
          t(ga, "class", u(i[0]) + " svelte-1jrib63"),
          (us.a = null),
          t(wa, "class", u(i[1]) + " svelte-1jrib63"),
          (ds.a = null),
          t(Be, "href", p[17]),
          t(Be, "class", i[2]),
          t(Be, "target", "_blank"),
          t(Be, "rel", "noopener noreferrer"),
          t(va, "class", "-mt-1"),
          (ps.a = null),
          t(Te, "href", p[18]),
          t(Te, "class", i[2]),
          t(Te, "target", "_blank"),
          t(Te, "rel", "noopener noreferrer"),
          t(ya, "class", "-mt-1"),
          (fs.a = null),
          t(Pe, "href", p[19]),
          t(Pe, "class", i[2]),
          t(Pe, "target", "_blank"),
          t(Pe, "rel", "noopener noreferrer"),
          t(_a, "class", "-mt-1"),
          (ms.a = null),
          t(Re, "href", p[20]),
          t(Re, "class", i[2]),
          t(Re, "target", "_blank"),
          t(Re, "rel", "noopener noreferrer"),
          t(ka, "class", "-mt-1"),
          t(I, "class", "max-w-5xl"),
          (bs.a = null),
          t(Ea, "class", u(i[0]) + " svelte-1jrib63"),
          (gs.a = null),
          t(Sa, "class", u(i[1]) + " svelte-1jrib63"),
          t(Y, "class", "max-w-5xl"),
          (ws.a = null),
          t(xa, "class", u(i[0]) + " svelte-1jrib63"),
          (vs.a = null),
          t(Ia, "class", u(i[1]) + " svelte-1jrib63"),
          t(Z, "class", "max-w-5xl"),
          (ys.a = null),
          t(Aa, "class", u(i[0]) + " svelte-1jrib63"),
          (_s.a = null),
          t(ja, "class", u(i[1]) + " svelte-1jrib63"),
          (ks.a = null),
          t(Ce, "href", p[21]),
          t(Ce, "class", i[2]),
          t(Ce, "target", "_blank"),
          t(Ce, "rel", "noopener noreferrer"),
          t(Ba, "class", "-mt-1"),
          (Es.a = null),
          t(Ne, "href", p[22]),
          t(Ne, "class", i[2]),
          t(Ne, "target", "_blank"),
          t(Ne, "rel", "noopener noreferrer"),
          t(Ta, "class", "-mt-1"),
          (Ss.a = null),
          t(Pa, "class", u(i[1]) + " svelte-1jrib63"),
          ir(mt.src, (uh = dr.picture)) || t(mt, "src", uh),
          t(mt, "alt", ""),
          t(
            mt,
            "class",
            u(
              z(
                "xs:my-10 mx-auto my-10 my-6 aspect-[875/663] lg:my-16 lg:w-4/5"
              )
            ) + " svelte-1jrib63"
          ),
          (xs.a = null),
          t(Ra, "class", u(i[1]) + " svelte-1jrib63"),
          t(g, "class", "max-w-5xl"),
          (Is.a = null),
          t(Ca, "class", u(i[0]) + " svelte-1jrib63"),
          (As.a = null),
          t(Na, "class", u(i[1]) + " svelte-1jrib63"),
          (js.a = null),
          t(La, "class", u(i[1]) + " svelte-1jrib63"),
          (Bs.a = null),
          t(Le, "href", p[23]),
          t(Le, "class", i[2]),
          t(Le, "target", "_blank"),
          t(Le, "rel", "noopener noreferrer"),
          t(y, "class", "max-w-5xl"),
          (Ts.a = null),
          t(Fa, "class", u(i[0]) + " svelte-1jrib63"),
          (Ps.a = null),
          t(Da, "class", u(i[1]) + " svelte-1jrib63"),
          (Rs.a = null),
          t(Fe, "href", p[24]),
          t(Fe, "class", i[2]),
          t(Fe, "target", "_blank"),
          t(Fe, "rel", "noopener noreferrer"),
          t(za, "class", "-mt-1"),
          (Cs.a = null),
          t(De, "href", p[25]),
          t(De, "class", i[2]),
          t(De, "target", "_blank"),
          t(De, "rel", "noopener noreferrer"),
          t(Ha, "class", "-mt-1"),
          (Ns.a = null),
          t(ze, "href", p[26]),
          t(ze, "class", i[2]),
          t(ze, "target", "_blank"),
          t(ze, "rel", "noopener noreferrer"),
          t(Oa, "class", "-mt-1"),
          (Ls.a = null),
          t(He, "href", p[27]),
          t(He, "class", i[2]),
          t(He, "target", "_blank"),
          t(He, "rel", "noopener noreferrer"),
          t(Wa, "class", "-mt-1"),
          (Fs.a = null),
          t(Oe, "href", p[28]),
          t(Oe, "class", i[2]),
          t(Oe, "target", "_blank"),
          t(Oe, "rel", "noopener noreferrer"),
          t(Ma, "class", "-mt-1"),
          (Ds.a = null),
          t(We, "href", p[29]),
          t(We, "class", i[2]),
          t(We, "target", "_blank"),
          t(We, "rel", "noopener noreferrer"),
          t($a, "class", "-mt-1"),
          t(A, "class", "max-w-5xl"),
          (zs.a = null),
          t(Qa, "class", u(i[0]) + " svelte-1jrib63"),
          (Hs.a = null),
          t(Ua, "class", u(i[1]) + " svelte-1jrib63"),
          t(ee, "class", "max-w-5xl"),
          (Os.a = null),
          t(qa, "class", u(i[0]) + " svelte-1jrib63"),
          (Ws.a = null),
          t(Va, "class", u(i[1]) + " svelte-1jrib63"),
          (Ms.a = null),
          t(Me, "href", p[30]),
          t(Me, "class", i[2]),
          t(Me, "target", "_blank"),
          t(Me, "rel", "noopener noreferrer"),
          t(Ka, "class", "-mt-1"),
          ($s.a = null),
          t($e, "href", p[31]),
          t($e, "class", i[2]),
          t($e, "target", "_blank"),
          t($e, "rel", "noopener noreferrer"),
          t(Ga, "class", "-mt-1"),
          (Qs.a = null),
          t(Ja, "class", u(i[1]) + " svelte-1jrib63"),
          t(_, "class", "max-w-5xl"),
          (Us.a = null),
          t(Xa, "class", u(i[0]) + " svelte-1jrib63"),
          (qs.a = null),
          t(Ya, "class", u(i[1]) + " svelte-1jrib63"),
          (Vs.a = null),
          t(Qe, "href", p[32]),
          t(Qe, "class", i[2]),
          t(Qe, "target", "_blank"),
          t(Qe, "rel", "noopener noreferrer"),
          t(Za, "class", "-mt-1"),
          (Ks.a = null),
          t(Ue, "href", p[33]),
          t(Ue, "class", i[2]),
          t(Ue, "target", "_blank"),
          t(Ue, "rel", "noopener noreferrer"),
          t(er, "class", "-mt-1"),
          t(j, "class", "max-w-5xl"),
          (Gs.a = null),
          t(tr, "class", u(i[0]) + " svelte-1jrib63"),
          (Js.a = null),
          t(ar, "class", u(i[1]) + " svelte-1jrib63"),
          ir(wt.src, (dh = ah.picture)) || t(wt, "src", dh),
          t(wt, "alt", ""),
          t(
            wt,
            "class",
            u(
              z(
                "xs:my-10 mx-auto my-10 my-6 aspect-[875/415] lg:my-16 lg:w-4/5"
              )
            ) + " svelte-1jrib63"
          ),
          t(H, "class", "max-w-5xl"),
          t(cr, "class", "mb-10 h-[1px] bg-[#CACACA] lg:mb-16"),
          t(
            vt,
            "class",
            u(
              z(
                "xs:text-xs text-2xs text-sm sm:text-sm lg:text-base xl:text-lg"
              )
            ) + " svelte-1jrib63"
          ),
          (Xs.a = null),
          t(rr, "class", u(i[0]) + " svelte-1jrib63"),
          (Ys.a = null),
          t(sr, "class", u(i[1]) + " svelte-1jrib63"),
          t(te, "class", "max-w-5xl pb-32"),
          t(lr, "class", "border-border -mx-4 border-t"),
          t(d, "class", "border-border m-4 border-x border-y px-4");
      },
      m(qe, f) {
        zf(qe, d, f),
          e(d, Q),
          e(Q, oe),
          e(oe, T),
          e(T, lt),
          e(T, cl),
          e(T, ot),
          e(T, hl),
          e(T, _t),
          e(_t, ue),
          e(Q, ul),
          e(Q, nt),
          e(d, dl),
          e(d, q),
          e(q, pl),
          e(q, fl),
          e(q, kt),
          pr.m(Gd, kt),
          e(q, ml),
          e(q, bl),
          e(q, gl),
          e(q, Et),
          fr.m(Jd, Et),
          e(d, wl),
          e(d, V),
          e(V, vl),
          e(V, yl),
          e(V, St),
          mr.m(Xd, St),
          e(V, _l),
          e(V, kl),
          e(V, El),
          e(V, xt),
          br.m(Yd, xt),
          e(d, Sl),
          e(d, v),
          e(v, xl),
          e(v, Il),
          e(v, It),
          gr.m(Zd, It),
          e(v, Al),
          e(v, jl),
          e(v, Bl),
          e(v, At),
          wr.m(ep, At),
          e(v, Tl),
          e(v, it),
          e(v, Pl),
          e(v, jt),
          vr.m(tp, jt),
          e(v, Rl),
          e(v, Cl),
          e(v, Nl),
          e(v, ct),
          e(ct, Bt),
          e(Bt, de),
          yr.m(ap, de),
          e(ct, Ll),
          e(ct, Tt),
          e(Tt, pe),
          _r.m(rp, pe),
          e(d, Fl),
          e(d, K),
          e(K, Dl),
          e(K, zl),
          e(K, Pt),
          kr.m(sp, Pt),
          e(K, Hl),
          e(K, Ol),
          e(K, Wl),
          e(K, Rt),
          Er.m(lp, Rt),
          e(d, Ml),
          e(d, G),
          e(G, $l),
          e(G, Ql),
          e(G, Ct),
          Sr.m(op, Ct),
          e(G, Ul),
          e(G, ql),
          e(G, Vl),
          e(G, Nt),
          xr.m(np, Nt),
          e(d, Kl),
          e(d, m),
          e(m, Gl),
          e(m, Jl),
          e(m, Lt),
          Ir.m(ip, Lt),
          e(m, Xl),
          e(m, Yl),
          e(m, Zl),
          e(m, Ft),
          Ar.m(cp, Ft),
          e(m, eo),
          e(m, U),
          e(U, to),
          e(U, ao),
          e(U, ro),
          e(U, so),
          e(U, Dt),
          e(Dt, fe),
          jr.m(hp, fe),
          e(U, lo),
          e(U, zt),
          e(zt, me),
          Br.m(up, me),
          e(U, oo),
          e(U, Ht),
          e(Ht, be),
          Tr.m(dp, be),
          e(m, no),
          e(m, io),
          e(m, co),
          e(m, ho),
          e(m, uo),
          e(m, Ot),
          Pr.m(pp, Ot),
          e(m, po),
          e(m, ht),
          e(m, fo),
          e(m, Wt),
          Rr.m(fp, Wt),
          e(d, mo),
          e(d, P),
          e(P, bo),
          e(P, go),
          e(P, Mt),
          Cr.m(mp, Mt),
          e(P, wo),
          e(P, vo),
          e(P, yo),
          e(P, $t),
          Nr.m(bp, $t),
          e(P, _o),
          e(P, ut),
          e(P, ko),
          e(P, Qt),
          Lr.m(gp, Qt),
          e(d, Eo),
          e(d, R),
          e(R, So),
          e(R, xo),
          e(R, Ut),
          Fr.m(wp, Ut),
          e(R, Io),
          e(R, Ao),
          e(R, jo),
          e(R, qt),
          Dr.m(vp, qt),
          e(R, Bo),
          e(R, To),
          e(R, Po),
          e(R, ge),
          zr.m(yp, ge),
          e(d, Ro),
          e(d, x),
          e(x, Co),
          e(x, No),
          e(x, Vt),
          Hr.m(_p, Vt),
          e(x, Lo),
          e(x, Fo),
          e(x, Do),
          e(x, Kt),
          Or.m(kp, Kt),
          e(x, zo),
          e(x, Ho),
          e(x, Oo),
          e(x, dt),
          e(dt, Gt),
          e(Gt, we),
          Wr.m(Ep, we),
          e(dt, Wo),
          e(dt, Jt),
          e(Jt, ve),
          Mr.m(Sp, ve),
          e(x, Mo),
          e(x, $o),
          e(d, Qo),
          e(d, J),
          e(J, Uo),
          e(J, qo),
          e(J, Xt),
          $r.m(xp, Xt),
          e(J, Vo),
          e(J, Ko),
          e(J, Go),
          e(J, Yt),
          Qr.m(Ip, Yt),
          e(d, Jo),
          e(d, w),
          e(w, Xo),
          e(w, Yo),
          e(w, Zt),
          Ur.m(Ap, Zt),
          e(w, Zo),
          e(w, en),
          e(w, tn),
          e(w, ea),
          qr.m(jp, ea),
          e(w, an),
          e(w, rn),
          e(w, sn),
          e(w, ye),
          Vr.m(Bp, ye),
          e(w, ln),
          e(w, on),
          e(w, nn),
          e(w, cn),
          e(w, hn),
          e(w, ta),
          Kr.m(Tp, ta),
          e(d, un),
          e(d, b),
          e(b, dn),
          e(b, pn),
          e(b, aa),
          Gr.m(Pp, aa),
          e(b, fn),
          e(b, mn),
          e(b, bn),
          e(b, ra),
          Jr.m(Rp, ra),
          e(b, gn),
          e(b, wn),
          e(b, vn),
          e(b, ne),
          e(ne, sa),
          e(sa, _e),
          Xr.m(Cp, _e),
          e(ne, yn),
          e(ne, la),
          e(la, ke),
          Yr.m(Np, ke),
          e(ne, _n),
          e(ne, oa),
          e(oa, Ee),
          Zr.m(Lp, Ee),
          e(ne, kn),
          e(ne, na),
          e(na, Se),
          es.m(Fp, Se),
          e(b, En),
          e(b, Sn),
          e(b, xn),
          e(b, ia),
          ts.m(Dp, ia),
          e(b, In),
          e(b, An),
          e(b, jn),
          e(b, xe),
          e(xe, ca),
          e(ca, Ie),
          as.m(zp, Ie),
          e(xe, Bn),
          e(xe, ha),
          e(ha, Ae),
          rs.m(Hp, Ae),
          e(xe, Tn),
          e(xe, ua),
          e(ua, je),
          ss.m(Op, je),
          e(d, Pn),
          e(d, C),
          e(C, Rn),
          e(C, Cn),
          e(C, da),
          ls.m(Wp, da),
          e(C, Nn),
          e(C, Ln),
          e(C, Fn),
          e(C, pa),
          os.m(Mp, pa),
          e(C, Dn),
          e(C, pt),
          e(C, zn),
          e(C, fa),
          ns.m($p, fa),
          e(d, Hn),
          e(d, X),
          e(X, On),
          e(X, Wn),
          e(X, ma),
          is.m(Qp, ma),
          e(X, Mn),
          e(X, $n),
          e(X, Qn),
          e(X, ba),
          cs.m(Up, ba),
          e(d, Un),
          e(d, I),
          e(I, qn),
          e(I, Vn),
          e(I, ga),
          hs.m(qp, ga),
          e(I, Kn),
          e(I, Gn),
          e(I, Jn),
          e(I, wa),
          us.m(Vp, wa),
          e(I, Xn),
          e(I, Yn),
          e(I, Zn),
          e(I, ie),
          e(ie, va),
          e(va, Be),
          ds.m(Kp, Be),
          e(ie, ei),
          e(ie, ya),
          e(ya, Te),
          ps.m(Gp, Te),
          e(ie, ti),
          e(ie, _a),
          e(_a, Pe),
          fs.m(Jp, Pe),
          e(ie, ai),
          e(ie, ka),
          e(ka, Re),
          ms.m(Xp, Re),
          e(I, ri),
          e(I, si),
          e(d, li),
          e(d, Y),
          e(Y, oi),
          e(Y, ni),
          e(Y, Ea),
          bs.m(Yp, Ea),
          e(Y, ii),
          e(Y, ci),
          e(Y, hi),
          e(Y, Sa),
          gs.m(Zp, Sa),
          e(d, ui),
          e(d, Z),
          e(Z, di),
          e(Z, pi),
          e(Z, xa),
          ws.m(ef, xa),
          e(Z, fi),
          e(Z, mi),
          e(Z, bi),
          e(Z, Ia),
          vs.m(tf, Ia),
          e(d, gi),
          e(d, g),
          e(g, wi),
          e(g, vi),
          e(g, Aa),
          ys.m(af, Aa),
          e(g, yi),
          e(g, _i),
          e(g, ki),
          e(g, ja),
          _s.m(rf, ja),
          e(g, Ei),
          e(g, Si),
          e(g, xi),
          e(g, ft),
          e(ft, Ba),
          e(Ba, Ce),
          ks.m(sf, Ce),
          e(ft, Ii),
          e(ft, Ta),
          e(Ta, Ne),
          Es.m(lf, Ne),
          e(g, Ai),
          e(g, ji),
          e(g, Bi),
          e(g, Pa),
          Ss.m(of, Pa),
          e(g, Ti),
          e(g, mt),
          e(g, Pi),
          e(g, Ra),
          xs.m(nf, Ra),
          e(d, Ri),
          e(d, y),
          e(y, Ci),
          e(y, Ni),
          e(y, Ca),
          Is.m(cf, Ca),
          e(y, Li),
          e(y, Fi),
          e(y, Di),
          e(y, Na),
          As.m(hf, Na),
          e(y, zi),
          e(y, Hi),
          e(y, Oi),
          e(y, La),
          js.m(uf, La),
          e(y, Wi),
          e(y, Mi),
          e(y, $i),
          e(y, Le),
          Bs.m(df, Le),
          e(d, Qi),
          e(d, A),
          e(A, Ui),
          e(A, qi),
          e(A, Fa),
          Ts.m(pf, Fa),
          e(A, Vi),
          e(A, Ki),
          e(A, Gi),
          e(A, Da),
          Ps.m(ff, Da),
          e(A, Ji),
          e(A, Xi),
          e(A, Yi),
          e(A, D),
          e(D, za),
          e(za, Fe),
          Rs.m(mf, Fe),
          e(D, Zi),
          e(D, Ha),
          e(Ha, De),
          Cs.m(bf, De),
          e(D, ec),
          e(D, Oa),
          e(Oa, ze),
          Ns.m(gf, ze),
          e(D, tc),
          e(D, Wa),
          e(Wa, He),
          Ls.m(wf, He),
          e(D, ac),
          e(D, Ma),
          e(Ma, Oe),
          Fs.m(vf, Oe),
          e(D, rc),
          e(D, $a),
          e($a, We),
          Ds.m(yf, We),
          e(A, sc),
          e(A, lc),
          e(d, oc),
          e(d, ee),
          e(ee, nc),
          e(ee, ic),
          e(ee, Qa),
          zs.m(_f, Qa),
          e(ee, cc),
          e(ee, hc),
          e(ee, uc),
          e(ee, Ua),
          Hs.m(kf, Ua),
          e(d, dc),
          e(d, _),
          e(_, pc),
          e(_, fc),
          e(_, qa),
          Os.m(Ef, qa),
          e(_, mc),
          e(_, bc),
          e(_, gc),
          e(_, Va),
          Ws.m(Sf, Va),
          e(_, wc),
          e(_, vc),
          e(_, yc),
          e(_, bt),
          e(bt, Ka),
          e(Ka, Me),
          Ms.m(xf, Me),
          e(bt, _c),
          e(bt, Ga),
          e(Ga, $e),
          $s.m(If, $e),
          e(_, kc),
          e(_, Ec),
          e(_, Sc),
          e(_, Ja),
          Qs.m(Af, Ja),
          e(d, xc),
          e(d, j),
          e(j, Ic),
          e(j, Ac),
          e(j, Xa),
          Us.m(jf, Xa),
          e(j, jc),
          e(j, Bc),
          e(j, Tc),
          e(j, Ya),
          qs.m(Bf, Ya),
          e(j, Pc),
          e(j, Rc),
          e(j, Cc),
          e(j, gt),
          e(gt, Za),
          e(Za, Qe),
          Vs.m(Tf, Qe),
          e(gt, Nc),
          e(gt, er),
          e(er, Ue),
          Ks.m(Pf, Ue),
          e(j, Lc),
          e(j, Fc),
          e(d, Dc),
          e(d, H),
          e(H, zc),
          e(H, Hc),
          e(H, tr),
          Gs.m(Rf, tr),
          e(H, Oc),
          e(H, Wc),
          e(H, Mc),
          e(H, ar),
          Js.m(Cf, ar),
          e(H, $c),
          e(H, wt),
          e(d, Qc),
          e(d, cr),
          e(d, Uc),
          e(d, te),
          e(te, vt),
          e(te, qc),
          e(te, rr),
          Xs.m(Nf, rr),
          e(te, Vc),
          e(te, Kc),
          e(te, Gc),
          e(te, sr),
          Ys.m(Lf, sr),
          e(d, Jc),
          e(d, lr),
          qf(yt, lr, null),
          (Zs = !0),
          Xc || ((fh = Hf(ue, "click", Xf)), (Xc = !0));
      },
      p: Df,
      i(qe) {
        Zs || (Uf(yt.$$.fragment, qe), (Zs = !0));
      },
      o(qe) {
        Qf(yt.$$.fragment, qe), (Zs = !1);
      },
      d(qe) {
        qe && o(d), $f(yt), (Xc = !1), fh();
      },
    }
  );
}
async function Xf() {
  try {
    const d = await fetch("/litepaper/QFN_Litepaper.pdf");
    if (!d.ok) throw new Error("PDF not found");
    const Q = await d.blob(),
      oe = window.URL.createObjectURL(Q),
      T = document.createElement("a");
    (T.style.display = "none"),
      (T.href = oe),
      (T.download = "QFN_Litepaper.pdf"),
      document.body.appendChild(T),
      T.click(),
      window.URL.revokeObjectURL(oe);
  } catch (i) {
    console.error("PDF downloading error:", i);
  }
}
function Yf(i) {
  const d = z("text-base"),
    Q = z("text-base "),
    oe = z(
      "xl:text-lg sm:text-base text-base text-[#0051FF] break-words underline decoration-1 underline-offset-4 xs:text-sm text-xs"
    );
  return [d, Q, oe];
}
class rm extends Wf {
  constructor(d) {
    super(), Mf(this, d, Yf, Jf, Ff, {});
  }
}
export { rm as component };
