const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const WA =
  "https://wa.me/5516997580120?text=" +
  encodeURIComponent("Olá, Dra. Marcela! Gostaria de agendar uma consulta.");
$$("[data-wa]").forEach((a) => {
  a.href = WA;
  a.target = "_blank";
  a.rel = "noopener";
});
$$("[data-split]").forEach((h) => {
  let n = 0;
  const f = (nd) => {
    [...nd.childNodes].forEach((c) => {
      if (c.nodeType == 3) {
        const fr = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach((t) => {
          if (!t.trim()) fr.append(t);
          else {
            const w = document.createElement("span");
            w.className = "w";
            w.innerHTML = `<i style="--i:${n++}">${t}</i>`;
            fr.append(w);
          }
        });
        c.replaceWith(fr);
      } else f(c);
    });
  };
  f(h);
});
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
        setTimeout(() => e.target.style.setProperty("--d", "0s"), 2000);
      }
    }),
  { threshold: 0.15 },
);

const dif = [
  [
    "🤝",
    "Atendimento humanizado",
    "Cada paciente é único e tratado com empatia.",
    "Você é ouvido, entende cada etapa e é tratado com respeito e carinho do início ao fim.",
  ],
  [
    "🎯",
    "Cuidado individualizado",
    "Plano pensado para a sua necessidade.",
    "Cada sorriso tem uma história. O tratamento é planejado de acordo com os seus objetivos e o seu perfil.",
  ],
  [
    "🔍",
    "Atenção aos detalhes",
    "Precisão em cada etapa do tratamento.",
    "Do diagnóstico ao acabamento, cada detalhe importa para um resultado natural e duradouro.",
  ],
  [
    "🪶",
    "Delicadeza",
    "Procedimentos confortáveis e sem sustos.",
    "Pacientes destacam as mãos delicadas da Dra. Marcela e a sensação de conforto durante os atendimentos.",
  ],
  [
    "💙",
    "Saúde bucal",
    "Compromisso com o seu bem-estar.",
    "Mais do que estética: prevenção, orientação e acompanhamento para manter sua boca saudável.",
  ],
  [
    "🛋️",
    "Ambiente acolhedor",
    "Espaço pensado para você se sentir à vontade.",
    "Um espaço tranquilo, pensado para quem tem receio de ir ao dentista. (Descrição provisória)",
  ],
  [
    "🛡️",
    "Biossegurança",
    "Esterilização e protocolos de higiene.",
    "Materiais esterilizados e protocolos rigorosos para a sua segurança. (Conteúdo provisório)",
  ],
  [
    "📅",
    "Acompanhamento próximo",
    "Suporte antes, durante e depois.",
    "Orientações claras após cada procedimento e canal direto pelo WhatsApp. (Conteúdo provisório)",
  ],
];
$("#difg").innerHTML = dif
  .map(
    (d, i) =>
      `<div class="card dc rv" tabindex="0" role="button" style="--d:${(i % 4) * 0.1}s"><div class="ic">${d[0]}</div><h3>${d[1]}</h3><p>${d[2]}</p><span class="mo">Saiba mais →</span></div>`,
  )
  .join("");
$$(".dc").forEach((c, i) => {
  const a = () =>
    open(
      `<div style="font-size:2.2rem">${dif[i][0]}</div><h2 style="margin-top:8px">${dif[i][1]}</h2><p>${dif[i][3]}</p><div style="margin-top:18px">${cta}</div>`,
    );
  c.onclick = a;
  c.onkeydown = (e) => {
    if (e.key == "Enter" || e.key == " ") {
      e.preventDefault();
      a();
    }
  };
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", e.clientX - r.left + "px");
    c.style.setProperty("--my", e.clientY - r.top + "px");
  });
});
$$(".card").forEach((c) => {
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect(),
      x = (e.clientX - r.left) / r.width - 0.5,
      y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  });
  c.addEventListener("pointerleave", () => (c.style.transform = ""));
});
const T = [
  {
    i: "🦷",
    t: "Aparelho ortodôntico",
    d: "Alinhamento dos dentes para uma mordida melhor e um sorriso mais harmônico.",
    l: ["Melhora a mordida", "Facilita a higiene", "Sorriso alinhado"],
    g: "linear-gradient(135deg,#3368A0,#66A3BF)",
  },
  {
    i: "🧼",
    t: "Limpeza dental",
    d: "Limpeza profissional preventiva para manter a saúde bucal em dia.",
    l: ["Remove tártaro", "Previne cáries", "Hálito mais fresco"],
    g: "linear-gradient(135deg,#66A3BF,#C8DFDB)",
  },
  {
    i: "✨",
    t: "Clareamento dental",
    d: "Remove manchas e devolve o branco natural dos dentes com segurança.",
    l: ["Dentes mais claros", "Mais confiança", "Avaliação individual"],
    g: "linear-gradient(135deg,#C8DFDB,#66A3BF)",
  },
  {
    i: "😁",
    t: "Estética dental",
    d: "Procedimentos para harmonizar forma, cor e proporção do sorriso.",
    l: ["Sorriso harmônico", "Resultado natural", "Plano personalizado"],
    g: "linear-gradient(135deg,#3368A0,#C8DFDB)",
  },
];
const R = [
  {
    i: "⭐⭐⭐⭐⭐",
    t: "Tatiane Pilla",
    d: "Ótima profissional, muito cuidadosa e acolhedora, tem uma delicadeza com as mãos, o que faz não sentirmos absolutamente nenhuma dor. A limpeza é surpreendente. Obrigada Marcela!",
  },
  {
    i: "⭐⭐⭐⭐⭐",
    t: "Junior Cardoso",
    d: "Marcela é uma excelente profissional, sempre dedicada, trabalho impecável, sempre que posso estou indo cuidar dos meus dentes com ela, sem dúvidas uma profissional diferenciada.",
  },
  {
    i: "⭐⭐⭐⭐⭐",
    t: "Regina Ferrari",
    d: "Ótima profissional, faço meus tratamentos com a Dra Marcela, muito atenciosa, dedicação total com seus pacientes, super recomendo ❤️",
  },
];
const md = $("#md"),
  mb = $("#mb");
let last;
const open = (h) => {
    last = document.activeElement;
    mb.innerHTML = h;
    md.classList.add("o");
    setTimeout(() => $(".x").focus(), 50);
  },
  close = () => {
    md.classList.remove("o");
    last && last.focus();
  };
$(".x").onclick = close;
md.onclick = (e) => {
  if (e.target == md) close();
};
addEventListener("keydown", (e) => {
  if (e.key == "Escape") close();
});
const cta = `<div class="row"><a class="btn" target="_blank" rel="noopener" href="${WA}">Agendar pelo WhatsApp</a></div>`;
const M = {
  trajetoria: `<h2>Trajetória</h2><p>Formação e especializações serão informadas pela doutora. (Conteúdo provisório: cirurgiã-dentista com foco em atendimento humanizado.)</p>${cta}`,
  contato: `<h2>Fale conosco</h2><p>📞 (16) 99758-0120<br>Responderemos o mais rápido possível.</p>${cta}`,
};
$$("[data-m]").forEach((b) => (b.onclick = () => open(M[b.dataset.m])));
function stack(id, data, dots, hint, onc) {
  const el = $(id),
    n = data.length;
  let a = 0,
    mode = "stack";
  el.className = "ms stack";
  el.innerHTML = data
    .map(
      (c, i) =>
        `<div class="mc" tabindex="0" role="button" data-i="${i}"><div class="sans">${c.i}</div><h3>${c.t}</h3><p>${c.d}</p></div>`,
    )
    .join("");
  const cs = [...el.children],
    db = $(dots);
  const tg = $(`[data-tg=${id.slice(4)}]`);
  tg.innerHTML = ["stack|Pilha", "grid|Grade", "list|Lista"]
    .map((s) => {
      const [k, l] = s.split("|");
      return `<button aria-pressed="${k == "stack"}" data-k="${k}">${l}</button>`;
    })
    .join("");
  function lay() {
    cs.forEach((c, i) => {
      const p = (i - a + n) % n;
      c.style.order = p;
      if (mode == "stack") {
        c.style.zIndex = n - p;
        c.style.opacity = p > 3 ? 0 : 1;
        c.style.transform = `translate(${p * 14}px,${p * 10}px) rotate(${(p - 1) * 2}deg)`;
        c.style.pointerEvents = p > 3 ? "none" : "";
      } else {
        c.style.transform = "";
        c.style.zIndex = "";
        c.style.opacity = 1;
      }
    });
    db.innerHTML =
      mode == "stack"
        ? data
            .map(
              (_, i) =>
                `<button class="${i == a ? "on" : ""}" aria-label="Cartão ${i + 1}"></button>`,
            )
            .join("")
        : "";
    [...db.children].forEach(
      (b, i) =>
        (b.onclick = () => {
          a = i;
          lay();
        }),
    );
    if (hint)
      $(hint).textContent =
        mode == "stack" ? "Arraste o cartão para navegar" : "";
  }
  tg.onclick = (e) => {
    const k = e.target.dataset.k;
    if (!k || k == mode) return;
    const f = cs.map((c) => c.getBoundingClientRect());
    mode = k;
    el.className = "ms " + k;
    lay();
    cs.forEach((c, i) => {
      const r = c.getBoundingClientRect(),
        fin = c.style.transform;
      c.style.transition = "none";
      c.style.transform = `translate(${f[i].left - r.left}px,${f[i].top - r.top}px) ${fin}`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          c.style.transition =
            "transform .7s cubic-bezier(.2,.7,.2,1),opacity .5s";
          c.style.transform = fin;
        }),
      );
    });
    $$(`[data-tg=${id.slice(4)}] button`).forEach((b) =>
      b.setAttribute("aria-pressed", b.dataset.k == k),
    );
  };
  let sx = null,
    dx = 0;
  cs.forEach((c, i) => {
    c.style.transition = "transform .7s cubic-bezier(.2,.7,.2,1),opacity .5s";
    const act = () => onc(data[i]);
    c.onkeydown = (e) => {
      if (e.key == "Enter" || e.key == " ") {
        e.preventDefault();
        act();
      }
      if (e.key == "ArrowRight" && mode == "stack") {
        a = (a + 1) % n;
        lay();
      }
      if (e.key == "ArrowLeft" && mode == "stack") {
        a = (a - 1 + n) % n;
        lay();
      }
    };
    c.onpointerdown = (e) => {
      if (mode == "stack" && (i - a + n) % n == 0) {
        sx = e.clientX;
        dx = 0;
        c.setPointerCapture(e.pointerId);
        c.style.transition = "none";
      }
    };
    c.onpointermove = (e) => {
      if (sx != null) {
        dx = e.clientX - sx;
        c.style.transform = `translateX(${dx}px) rotate(${dx / 25 - 2}deg)`;
      }
    };
    c.onpointerup = () => {
      if (sx == null) {
        act();
        return;
      }
      sx = null;
      c.style.transition = "transform .7s cubic-bezier(.2,.7,.2,1),opacity .5s";
      if (dx < -50) a = (a + 1) % n;
      else if (dx > 50) a = (a - 1 + n) % n;
      else if (Math.abs(dx) < 5) act();
      lay();
    };
  });
  lay();
}
stack("#ms-t", T, "#dt", "#ht", (c) =>
  open(
    `<h2>${c.t}</h2><p>${c.d}</p><ul class="sans" style="margin:14px 0 20px;padding-left:18px">${c.l.map((x) => `<li>${x}</li>`).join("")}</ul>${cta}`,
  ),
);
stack("#ms-r", R, "#dr", null, (c) =>
  open(
    `<div>${c.i}</div><h2 style="margin-top:8px">${c.t}</h2><p>“${c.d}”</p><p class="sans" style="margin-top:12px;font-size:.8rem">Avaliação publicada no Google</p>`,
  ),
);
$("#feats").innerHTML =
  `<div class="tg rv" id="ftg" style="flex-wrap:wrap;justify-content:center"></div><div class="feat" id="fp"></div>`;
const ftg = $("#ftg"),
  fp = $("#fp");
ftg.innerHTML = ["Ortodontia", "Limpeza", "Clareamento", "Estética"]
  .map((l, i) => `<button aria-pressed="${i == 0}" data-i="${i}">${l}</button>`)
  .join("");
const sf = (i) => {
  const t = T[i];
  fp.style.opacity = 0;
  fp.style.transform = "translateY(14px)";
  setTimeout(
    () => {
      fp.innerHTML = `<div class="vis" style="background:${t.g}">${t.i}</div><div><h2>${t.t}</h2><p>${t.d}</p><ul>${t.l.map((x) => `<li>${x}</li>`).join("")}</ul><a class="btn" href="${WA}" target="_blank" rel="noopener">Agendar avaliação</a></div>`;
      fp.style.opacity = 1;
      fp.style.transform = "none";
    },
    i == sf.c ? 0 : 350,
  );
  sf.c = i;
  [...ftg.children].forEach((b, k) => b.setAttribute("aria-pressed", k == i));
};
ftg.onclick = (e) => {
  const b = e.target.closest("button");
  if (b) sf(+b.dataset.i);
};
sf(0);
const G = [
  ["Estética dental", "Restauração dos dentes da frente"],
  ["Estética dental", "Preparo e resultado final"],
  ["Restauração", "Dente molar restaurado"],
  ["Limpeza dental", "Remoção de tártaro e manchas"],
  ["Aparelho ortodôntico", "Antes e com aparelho"],
  ["Estética dental", "Antes e depois"],
  ["Limpeza dental", "Antes e depois"],
].map((x, i) => ({ n: i + 1, t: x[0], l: x[1] }));
$("#sls").innerHTML = G.map(
  (g) =>
    `<div class="sl" style="--im:var(--g${g.n})"><span>${g.t} · ${g.l}</span></div>`,
).join("");
$("#ths").innerHTML = G.map(
  (g) =>
    `<button aria-label="${g.t}, foto ${g.n}" style="background:var(--g${g.n}) center/cover"></button>`,
).join("");
let gi = 0;
const sl = $$(".sl"),
  th = $$("#ths button");
const go = (i) => {
  gi = (i + G.length) % G.length;
  sl.forEach((s, k) => s.classList.toggle("on", k == gi));
  th.forEach((s, k) => s.classList.toggle("on", k == gi));
};
th.forEach((b, i) => (b.onclick = () => go(i)));
$("#pv").onclick = () => go(gi - 1);
$("#nx").onclick = () => go(gi + 1);
$(".car").onkeydown = (e) => {
  if (e.key == "ArrowRight") go(gi + 1);
  if (e.key == "ArrowLeft") go(gi - 1);
};
go(0);
setInterval(() => go(gi + 1), 6000);
$(".main").onclick = (e) => {
  if (e.target.closest(".ar")) return;
  const g = G[gi];
  open(
    `<div style="height:min(62vh,520px);border-radius:18px;background:var(--g${g.n}) center/contain no-repeat #e4ecea"></div><p class="sans" style="margin-top:12px;font-weight:600">${g.t}</p><p>${g.l}</p>`,
  );
};

const nav = $("#nav"),
  pp = $$("[data-p]");
let tk = 0;
const upd = () => {
  tk = 0;
  nav.classList.toggle("s", scrollY > 30);
  const vh = innerHeight;
  pp.forEach((e) => {
    const r = e.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) return;
    e.style.transform = `translateY(${(r.top + r.height / 2 - vh / 2) * e.dataset.p}px)`;
  });
};
addEventListener(
  "scroll",
  () => {
    if (!tk) tk = requestAnimationFrame(upd);
  },
  { passive: true },
);
upd();
$$(".rv,[data-split]").forEach((e) => io.observe(e));
