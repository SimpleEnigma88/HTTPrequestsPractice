import { Component, OnInit } from '@angular/core';
import { SpellService } from './spell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  spells: any[] = [];
  selectedSchool: string;
  schools: string[] = ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'];

  constructor(private spellService: SpellService) { }

  ngOnInit() {
    this.getSpells();
  }

  getSpells() {
    this.spellService.getSpellsBySchool(this.selectedSchool)
      .subscribe(spells => this.spells = spells);
  }

  onSchoolChange() {
    this.getSpells();
  }
}

