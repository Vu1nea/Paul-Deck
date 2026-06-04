<script setup lang="ts">
import SlideCorner from '../components/SlideCorner.vue'
import SlideHeader from '../components/SlideHeader.vue'
</script>

<template>
  <section data-deck-active>
    <div class="frame">
      <SlideCorner section="The problem" />
      <SlideHeader eyebrow="The problem" title="The limits of fixed dashboards" max-width="16ch" />
      <div class="cols tight">
        <p class="lead a" style="--d:.18s; max-width:20ch">
          Most dashboards ship a fixed menu of integrations. The data you actually care about never fits the list.
        </p>
        <div class="fake-app panel a-pop" style="--d:.28s">
          <!-- window chrome -->
          <div class="fapp-chrome">
            <div class="fc-dots"><i></i><i></i><i></i></div>
            <span class="fapp-addr">your-dashboard.internal / overview</span>
          </div>
          <!-- app shell -->
          <div class="fapp-shell">
            <!-- sidebar -->
            <nav class="fapp-nav">
              <div class="fnav-brand">◈ Dash</div>
              <div class="fnav-sep">Main</div>
              <div class="fnav-item active">Overview</div>
              <div class="fnav-item">Reports</div>
              <div class="fnav-item">Alerts</div>
              <div class="fnav-sep">Admin</div>
              <div class="fnav-item">Sources</div>
              <div class="fnav-item">Settings</div>
            </nav>
            <!-- main content -->
            <div class="fapp-body">
              <div class="fapp-topbar">
                <span class="ftb-title">Overview</span>
                <span class="ftb-live">● Live</span>
              </div>
              <div class="fapp-grid">
                <div class="fkpi">
                  <div class="fkpi-l">Revenue MTD</div>
                  <div class="fkpi-v">$48,291</div>
                  <div class="fkpi-d up">↑ 12.4%</div>
                </div>
                <div class="fkpi">
                  <div class="fkpi-l">Active Users</div>
                  <div class="fkpi-v">1,204</div>
                  <div class="fkpi-d up">↑ 8.1%</div>
                </div>
                <div class="fkpi">
                  <div class="fkpi-l">Error Rate</div>
                  <div class="fkpi-v">0.3%</div>
                  <div class="fkpi-d dn">↓ 0.1%</div>
                </div>
                <div class="fw-chart">
                  <div class="fwh">Daily Signups</div>
                  <div class="fbars">
                    <div class="fb" style="--h:42%"></div>
                    <div class="fb" style="--h:60%"></div>
                    <div class="fb" style="--h:36%"></div>
                    <div class="fb" style="--h:74%"></div>
                    <div class="fb" style="--h:53%"></div>
                    <div class="fb" style="--h:87%"></div>
                    <div class="fb hot" style="--h:95%"></div>
                  </div>
                </div>
                <div class="fw-events">
                  <div class="fwh">Recent Events</div>
                  <div class="fev"><span class="fdot ok"></span>Deploy #412 succeeded</div>
                  <div class="fev"><span class="fdot warn"></span>High CPU on worker-3</div>
                  <div class="fev"><span class="fdot ok"></span>Backup completed</div>
                  <div class="fev"><span class="fdot ok"></span>Cert renewed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fake-app {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

/* window chrome */
.fapp-chrome {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 22px;
  background: var(--bg-3);
  border-bottom: 1px solid var(--line);
  flex-shrink: 0;
}
.fc-dots { display: flex; gap: 10px; }
.fc-dots i { width: 16px; height: 16px; border-radius: 50%; display: block; }
.fc-dots i:nth-child(1) { background: #ff5f57; }
.fc-dots i:nth-child(2) { background: #febc2e; }
.fc-dots i:nth-child(3) { background: #28c840; }
.fapp-addr {
  font-family: var(--font-mono);
  font-size: 22px;
  color: var(--muted);
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 7px;
  padding: 5px 16px;
  flex: 1;
  max-width: 400px;
}

/* app shell */
.fapp-shell { display: flex; flex: 1; overflow: hidden; }

/* sidebar */
.fapp-nav {
  width: 180px;
  flex-shrink: 0;
  background: var(--bg-3);
  border-right: 1px solid var(--line);
  padding: 20px 14px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.fnav-brand {
  font-family: var(--font-mono);
  font-size: 26px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 16px;
  padding: 0 8px;
}
.fnav-sep {
  font-family: var(--font-mono);
  font-size: 19px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--muted);
  padding: 12px 8px 4px;
}
.fnav-item {
  font-size: 24px;
  color: var(--text-dim);
  padding: 9px 12px;
  border-radius: 7px;
}
.fnav-item.active {
  background: rgba(212,255,79,.1);
  color: var(--accent);
}

/* main area */
.fapp-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  overflow: hidden;
}
.fapp-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--line);
  flex-shrink: 0;
}
.ftb-title { font-size: 30px; font-weight: 600; color: var(--text); }
.ftb-live { font-family: var(--font-mono); font-size: 22px; color: var(--accent); }

/* widget grid */
.fapp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  gap: 14px;
  padding: 18px 22px;
  flex: 1;
  overflow: hidden;
}

/* KPI cards */
.fkpi {
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fkpi-l {
  font-family: var(--font-mono);
  font-size: 20px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
}
.fkpi-v { font-size: 40px; font-weight: 600; color: var(--text); line-height: 1; }
.fkpi-d { font-family: var(--font-mono); font-size: 22px; }
.fkpi-d.up { color: var(--accent); }
.fkpi-d.dn { color: #f08c5a; }

/* bar chart widget */
.fw-chart {
  grid-column: span 2;
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.fwh {
  font-family: var(--font-mono);
  font-size: 22px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  flex-shrink: 0;
}
.fbars {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex: 1;
}
.fb {
  flex: 1;
  height: var(--h);
  background: var(--line-2);
  border-radius: 4px 4px 0 0;
}
.fb.hot { background: var(--accent); }

/* events widget */
.fw-events {
  grid-column: span 1;
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.fev {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 0;
  border-top: 1px solid var(--line);
  font-size: 22px;
  color: var(--text-dim);
}
.fwh + .fev { border-top: none; margin-top: 8px; }
.fdot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.fdot.ok { background: var(--accent); }
.fdot.warn { background: #f08c5a; }
</style>
