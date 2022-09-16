import { color } from '~/helpers'

type Theme = Record<string, any>

const theme: Theme = {
  $schema: 'vscode://schemas/color-theme',
  name: 'Custom Color Theme',
  colors: {
    'focusBorder': color('accent'),
    'foreground': color('light-'),

    'activityBar.background': color('dark'),
    'activityBar.foreground': color('light'),
    'activityBar.border': color('dark--'),
    'activityBar.activeBorder': color('accent'),
    'activityBar.inactiveForeground': color('light---'),
    'activityBar.dropBorder': color('accent'),
    'activityBarBadge.background': color('accent'),
    'activityBarBadge.foreground': color('light'),

    'button.background': color('accent'),
    'button.hoverBackground': color('accent+'),
    'button.foreground': color('white'),

    'badge.background': '#0000',
    'badge.foreground': '#6ba1ff',

    'breadcrumb.background': color('dark'),
    'breadcrumb.foreground': color('light-'),
    'breadcrumb.focusForeground': color('accent'),
    'breadcrumb.activeSelectionForeground': color('accent+'),
    'breadcrumbPicker.background': color('dark+'),

    'checkbox.background': color('input_background'),
    'checkbox.border': color('input_background'),

    'debugIcon.startForeground': color('success'),
    'debugIcon.pauseForeground': color('accent+'),
    'debugIcon.stopForeground': color('error'),
    'debugIcon.disconnectForeground': color('error'),
    'debugIcon.restartForeground': color('success'),
    'debugIcon.stepOverForeground': color('accent+'),
    'debugIcon.stepIntoForeground': color('accent+'),
    'debugIcon.stepOutForeground': color('accent+'),
    'debugIcon.continueForeground': color('accent+'),

    'debugToolBar.background': color('dark-'),

    'diffEditor.insertedTextBackground': color('changes_add', 0.1),
    'diffEditor.removedTextBackground': color('changes_delete', 0.2),

    'diffEditorOverview.insertedForeground': color('changes_add'),
    'diffEditorOverview.removedForeground': color('changes_delete'),

    'diffEditorGutter.insertedLineBackground': color('changes_add'),
    'diffEditorGutter.removedLineBackground': color('changes_delete'),

    'dropdown.background': color('input_background'),
    'dropdown.border': color('input_background'),
    'dropdown.foreground': color('input_foreground'),
    'dropdown.listBackground': color('input_background'),

    'editor.background': color('dark'),
    'editor.foreground': color('light'),
    'editor.lineHighlightBackground': color('white', 0.05),
    'editor.hoverHighlightBackground': color('accent', 0.15),
    'editor.selectionBackground': color('accent', 0.4),
    'editor.inactiveSelectionBackground': color('accent', 0.35),
    'editor.selectionHighlightBackground': color('accent_alt', 0.3),
    'editor.wordHighlightBackground': '#0000',
    'editor.wordHighlightBorder': color('accent+', 0.8),
    'editor.wordHighlightStrongBackground': '#0000',
    'editor.wordHighlightStrongBorder': color('accent+', 0.8),
    'editor.findMatchBackground': color('match_current', 0.5),
    'editor.findMatchHighlightBackground': color('match_other', 0.4),
    'editor.rangeHighlightBackground': color('accent', 0.3),
    'editor.snippetTabstopHighlightBackground': '#0000',
    'editor.snippetTabstopHighlightBorder': color('accent'),
    'editor.snippetFinalTabstopHighlightBackground': '#0000',
    'editor.snippetFinalTabstopHighlightBorder': color('accent'),

    'editorBracketHighlight.foreground1': '#b4f8af',
    'editorBracketHighlight.foreground2': '#abcdfd',
    'editorBracketHighlight.foreground3': '#f7accd',
    'editorBracketHighlight.unexpectedBracket.foreground': color('error'),

    'editorBracketMatch.background': '#0000',
    'editorBracketMatch.border': color('accent', 0.8),

    'editorCodeLens.foreground': color('light--'),

    'editorCursor.foreground': color('light'),

    'editorError.foreground': color('error', 0.7),
    'editorWarning.foreground': color('warn', 0.5),
    'editorInfo.foreground': color('success', 0.25),

    'editorGhostText.foreground': color('light---'),

    'editorGroup.dropBackground': color('accent', 0.15),
    'editorGroup.dropIntoPromptBackground': color('dark'),
    'editorGroup.dropIntoPromptBorder': '#0000',
    'editorGroup.dropIntoPromptForeground': color('light'),
    'editorGroupHeader.noTabsBackground': color('dark-'),
    'editorGroupHeader.tabsBackground': color('dark-'),

    'editorGutter.addedBackground': color('changes_add'),
    'editorGutter.deletedBackground': color('changes_delete'),
    'editorGutter.modifiedBackground': color('changes_modify'),

    'editorHoverWidget.background': color('dark-'),
    'editorHoverWidget.border': color('dark-'),
    'editorHoverWidget.foreground': color('light'),
    'editorHoverWidget.highlightForeground': color('accent'),
    'editorHoverWidget.statusBarBackground': color('dark-'),

    'editorIndentGuide.background': color('light----'),
    'editorIndentGuide.activeBackground': color('light---'),

    'editorLightBulb.foreground': color('light'),
    'editorLightBulbAutoFix.foreground': color('light'),

    'editorLineNumber.foreground': color('light---'),
    'editorLineNumber.activeForeground': color('light-'),

    'editorLink.activeForeground': color('accent+'),

    'editorOverviewRuler.background': color('dark'),
    'editorOverviewRuler.border': color('dark--'),
    'editorOverviewRuler.findMatchForeground': color('match_other'),
    'editorOverviewRuler.addedForeground': color('changes_add', 0.5),
    'editorOverviewRuler.modifiedForeground': color('changes_modify', 0.5),
    'editorOverviewRuler.deletedForeground': color('changes_delete', 0.5),
    'editorOverviewRuler.errorForeground': color('error'),
    'editorOverviewRuler.warningForeground': color('warn'),
    'editorOverviewRuler.infoForeground': color('success', 0.1),
    'editorOverviewRuler.selectionHighlightForeground': color('accent', 0.7),
    'editorOverviewRuler.wordHighlightForeground': color('accent', 0.7),
    'editorOverviewRuler.wordHighlightStrongForeground': color('accent', 0.7),
    'editorOverviewRuler.currentContentForeground': color(
      'changes_modify',
      0.8
    ),
    'editorOverviewRuler.incomingContentForeground': color('changes_add', 0.8),
    'editorOverviewRuler.commonContentForeground': color('warn', 0.8),

    'editorSuggestWidget.background': color('dark-'),
    'editorSuggestWidget.border': color('dark-'),
    'editorSuggestWidget.foreground': color('light'),
    'editorSuggestWidget.highlightForeground': color('accent'),
    'editorSuggestWidget.focusHighlightForeground': color('accent+'),

    'editorWidget.background': color('dark-'),
    'editorWidget.border': color('dark-'),
    'editorWidget.foreground': color('light'),
    'editorWidget.resizeBorder': color('light---'),

    'errorLens.errorBackground': color('error', 0.12),
    'errorLens.errorForeground': '#0000',
    'errorLens.warningBackground': color('warn', 0.04),
    'errorLens.warningForeground': '#0000',
    'errorLens.infoBackground': '#0000',
    'errorLens.infoForeground': '#0000',

    'extensionIcon.starForeground': color('accent'),
    'extensionIcon.verifiedForeground': color('accent+'),
    'extensionIcon.preReleaseForeground': color('warn'),

    'gitDecoration.untrackedResourceForeground': color('git_untrack'),
    'gitDecoration.modifiedResourceForeground': color('git_modify'),
    'gitDecoration.deletedResourceForeground': color('git_delete'),
    'gitDecoration.addedResourceForeground': color('git_add'),
    'gitDecoration.renamedResourceForeground': color('git_add'),
    'gitDecoration.stageModifiedResourceForeground': color('git_modify_staged'),
    'gitDecoration.stageDeletedResourceForeground': color('git_delete_staged'),
    'gitDecoration.ignoredResourceForeground': color('git_ignore'),
    'gitDecoration.conflictingResourceForeground': color('git_conflict'),

    'gitlens.trailingLineForegroundColor': color('light----'),

    'input.background': color('input_background'),
    'input.border': color('input_background'),
    'input.foreground': color('input_foreground'),
    'input.placeholderForeground': color('input_placeholder'),

    'inputOption.activeBackground': color('accent'),
    'inputOption.activeBorder': color('accent'),
    'inputOption.activeForeground': color('light'),
    'inputOption.hoverBackground': color('accent', 0.6),

    'inputValidation.errorBackground': color('error', 0.6),
    'inputValidation.errorBorder': color('error'),
    'inputValidation.errorForeground': color('light'),
    'inputValidation.warningBackground': color('warn', 0.6),
    'inputValidation.warningBorder': color('warn'),
    'inputValidation.warningForeground': color('light'),

    'keybindingLabel.background': color('dark+'),
    'keybindingLabel.border': color('dark+'),
    'keybindingLabel.foreground': color('light'),
    'keybindingLabel.bottomBorder': color('light-'),

    'keybindingTable.headerBackground': color('white', 0.08),
    'keybindingTable.rowsBackground': color('white', 0.05),

    'list.activeSelectionBackground': color('accent', 0.25),
    'list.activeSelectionForeground': color('light'),
    'list.activeSelectionIconForeground': color('light'),
    'list.dropBackground': color('accent', 0.15),
    'list.highlightForeground': color('accent'),
    'list.focusHighlightForeground': color('accent+'),
    'list.hoverBackground': color('white', 0.05),
    'list.inactiveSelectionBackground': color('white', 0.11),
    'list.errorForeground': color('error+'),
    'list.warningForeground': color('warn+'),
    'list.filterMatchBackground': color('match_current', 0.5),
    'list.filterMatchBorder': '#0000',

    'listFilterWidget.background': color('dark+'),
    'listFilterWidget.outline': color('warn'),
    'listFilterWidget.noMatchesOutline': color('error'),

    'menu.background': color('dark+'),
    'menu.foreground': color('light'),
    'menu.selectionBackground': color('accent'),
    'menu.selectionForeground': color('white'),
    'menu.selectionBorder': '#0000',
    'menu.separatorBackground': color('white', 0.2),
    'menu.border': '#0000',

    'menubar.selectionBackground': color('accent'),
    'menubar.selectionForeground': color('white'),
    'menubar.selectionBorder': '#0000',

    'merge.currentHeaderBackground': color('changes_modify', 0.6),
    'merge.currentContentBackground': color('changes_modify', 0.2),
    'merge.incomingHeaderBackground': color('changes_add', 0.6),
    'merge.incomingContentBackground': color('changes_add', 0.2),
    'merge.commonHeaderBackground': color('warn', 0.6),
    'merge.commonContentBackground': color('warn', 0.2),
    'merge.border': '#0000',

    'mergeEditor.change.background': color('changes_modify', 0.08),
    'mergeEditor.change.word.background': color('changes_modify', 0.2),
    'mergeEditor.conflict.handledUnfocused.border': color('changes_add'),
    'mergeEditor.conflict.handledFocused.border': color('changes_add'),
    'mergeEditor.conflict.unhandledUnfocused.border': color('changes_conflict'),
    'mergeEditor.conflict.unhandledFocused.border': color('changes_conflict'),
    'mergeEditor.conflict.handled.minimapOverViewRuler': color('changes_add'),
    'mergeEditor.conflict.unhandled.minimapOverViewRuler':
      color('changes_conflict'),
    'mergeEditor.conflictingLines.background': '#0000',

    'minimap.background': color('dark'),
    'minimap.foregroundOpacity': '#000f',
    'minimap.findMatchHighlight': color('match_other', 0.8),
    'minimap.selectionHighlight': color('accent', 0.4),
    'minimap.selectionOccurrenceHighlight': color('accent', 0.3),
    'minimap.errorHighlight': color('error'),
    'minimap.warningHighlight': color('warn', 0.6),

    'minimapSlider.background': color('white', 0.07),
    'minimapSlider.hoverBackground': color('white', 0.1),
    'minimapSlider.activeBackground': color('accent', 0.4),

    'minimapGutter.addedBackground': color('changes_add', 0.6),
    'minimapGutter.modifiedBackground': color('changes_modify', 0.6),
    'minimapGutter.deletedBackground': color('changes_delete', 0.6),

    'notificationCenter.border': '#0000',
    'notificationCenterHeader.background': color('dark+'),
    'notificationCenterHeader.foreground': color('light'),

    'notifications.background': color('dark+'),
    'notifications.border': '#0000',
    'notifications.foreground': color('light'),
    'notificationLink.foreground': color('accent'),
    'notificationToast.border': '#0000',

    'notificationsErrorIcon.foreground': color('error'),
    'notificationsWarningIcon.foreground': color('warn'),
    'notificationsInfoIcon.foreground': color('accent'),

    'panel.background': color('dark-'),
    'panel.border': '#0000',
    'panel.dropBorder': color('accent'),

    'panelSection.border': color('dark+'),
    'panelSection.dropBackground': color('accent', 0.15),

    'panelTitle.activeBorder': color('accent'),
    'panelTitle.activeForeground': color('light'),
    'panelTitle.inactiveForeground': color('light--'),

    'peekView.border': color('accent'),
    'peekViewEditor.background': color('accent', 0.05),
    'peekViewEditorGutter.background': color('accent', 0.05),
    'peekViewEditor.matchHighlightBackground': color('match_current', 0.6),
    'peekViewEditor.matchHighlightBorder': '#0000',
    'peekViewResult.background': color('dark--'),
    'peekViewResult.fileForeground': color('light'),
    'peekViewResult.lineForeground': color('light--'),
    'peekViewResult.matchHighlightBackground': color('match_current', 0.6),
    'peekViewResult.selectionBackground': color('accent', 0.25),
    'peekViewResult.selectionForeground': color('light'),

    'peekViewTitle.background': color('dark-'),
    'peekViewTitleDescription.foreground': color('light--'),
    'peekViewTitleLabel.foreground': color('light'),

    'pickerGroup.border': color('dark+'),
    'pickerGroup.foreground': color('accent'),

    'quickInput.background': color('dark-'),
    'quickInput.foreground': color('light'),

    'scrollbarSlider.background': color('white', 0.15),
    'scrollbarSlider.activeBackground': color('accent', 0.6),
    'scrollbarSlider.hoverBackground': color('white', 0.2),

    'settings.headerForeground': color('light'),
    'settings.modifiedItemIndicator': color('accent'),
    'settings.rowHoverBackground': color('white', 0.02),
    'settings.focusedRowBackground': color('white', 0.04),
    'settings.focusedRowBorder': '#0000',

    'sideBar.background': color('dark--'),
    'sideBar.foreground': color('light-'),
    'sideBar.border': '#0000',

    'sideBarSectionHeader.background': '#0000',
    'sideBarSectionHeader.foreground': color('light'),

    'sideBarTitle.foreground': color('light-'),

    'statusBar.border': '#0000',
    'statusBar.background': color('dark+'),
    'statusBar.foreground': color('light'),
    'statusBar.noFolderBackground': color('dark+'),
    'statusBar.noFolderForeground': color('light'),
    'statusBar.debuggingBackground': color('dark+'),
    'statusBar.debuggingForeground': color('light'),
    'statusBar.focusBorder': color('accent'),

    'statusBarItem.activeBackground': color('accent+'),
    'statusBarItem.hoverBackground': color('accent'),
    'statusBarItem.errorBackground': color('error'),
    'statusBarItem.errorForeground': color('white'),
    'statusBarItem.warningBackground': color('warn'),
    'statusBarItem.warningForeground': color('white'),
    'statusBarItem.compactHoverBackground': color('accent'),
    'statusBarItem.focusBorder': color('accent'),

    'tab.activeBackground': color('dark'),
    'tab.activeBorderTop': color('accent'),
    'tab.activeForeground': color('light'),
    'tab.border': color('dark+'),
    'tab.hoverBackground': color('accent', 0.2),
    'tab.inactiveBackground': color('dark-'),
    'tab.inactiveForeground': color('light-'),

    'terminal.background': color('dark-'),
    'terminal.border': '#0000',
    'terminal.foreground': color('light'),
    'terminal.dropBackground': color('accent', 0.15),
    'terminal.ansiBrightBlack': color('light--'),
    'terminal.ansiBrightBlue': color('syntax_function'),
    'terminal.ansiBrightCyan': '#00ffff',
    'terminal.ansiBrightGreen': color('success'),
    'terminal.ansiBrightMagenta': color('accent++'),
    'terminal.ansiBrightRed': color('error'),
    'terminal.ansiBrightWhite': color('light'),
    'terminal.ansiBrightYellow': '#fae12f',
    'terminal.ansiBlack': color('dark+', 0.9),
    'terminal.ansiBlue': '#3b79ff',
    'terminal.ansiCyan': '#00dede',
    'terminal.ansiGreen': color('success'),
    'terminal.ansiMagenta': color('accent'),
    'terminal.ansiRed': color('error'),
    'terminal.ansiWhite': color('light'),
    'terminal.ansiYellow': '#fcb10d',

    'terminalCommandDecoration.successBackground': color('success'),
    'terminalCommandDecoration.errorBackground': color('error'),

    'terminalCursor.background': color('white'),
    'terminalCursor.foreground': color('accent'),

    'testing.iconFailed': color('error'),
    'testing.iconErrored': color('error'),
    'testing.iconPassed': color('success'),
    'testing.iconQueued': color('accent'),
    'testing.iconUnset': color('light--'),
    'testing.iconSkipped': color('warn'),

    'textBlockQuote.background': color('dark'),
    'textBlockQuote.border': color('dark+'),

    'textLink.foreground': color('accent+'),
    'textLink.activeForeground': color('accent+'),

    'textPreformat.foreground': color('syntax_md-raw'),

    'titleBar.activeBackground': color('dark+', 0.8),
    'titleBar.activeForeground': color('light-'),
    'titleBar.inactiveBackground': color('dark+'),
    'titleBar.inactiveForeground': color('light--'),
    'titleBar.border': '#0000',

    'tree.indentGuidesStroke': color('light----'),

    'widget.shadow': '#0005',
  },
  tokenColors: [
    // basic
    { scope: 'emphasis', settings: { fontStyle: 'italic' } },
    { scope: 'strong', settings: { fontStyle: 'bold' } },
    { scope: 'header', settings: { foreground: '#000080' } },
    { scope: 'invalid', settings: { foreground: color('error') } },
    {
      scope: 'keyword.other.unit',
      settings: { foreground: color('syntax_unit'), fontStyle: 'italic' },
    },
    {
      scope: 'constant.character.escape',
      settings: { foreground: color('syntax_string-escape') },
    },

    // markup
    { scope: 'markup.underline', settings: { fontStyle: 'underline' } },
    { scope: 'markup.bold', settings: { fontStyle: 'bold' } },
    { scope: 'markup.italic', settings: { fontStyle: 'italic' } },
    { scope: 'markup.strikethrough', settings: { fontStyle: 'strikethrough' } },
    {
      scope: 'markup.heading',
      settings: { fontStyle: 'bold', foreground: color('syntax_md-keyword') },
    },
    {
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: { foreground: color('syntax_md-keyword') },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: { foreground: color('syntax_md-keyword') },
    },
    {
      scope: 'markup.quote.markdown',
      settings: { fontStyle: 'italic' },
    },
    {
      scope: 'markup.inline.raw',
      settings: { foreground: color('syntax_md-raw') },
    },
    {
      scope: 'markup.inserted',
      settings: { foreground: color('changes_add') },
    },
    {
      scope: 'markup.deleted',
      settings: { foreground: color('changes_delete') },
    },
    {
      scope: 'markup.changed',
      settings: { foreground: color('changes_modify') },
    },

    // comments
    {
      scope: 'comment',
      settings: { foreground: color('syntax_comment'), fontStyle: 'italic' },
    },

    // operator
    {
      scope: ['keyword.operator', 'punctuation.separator.key-value'],
      settings: { foreground: color('syntax_operator') },
    },

    // primitives
    {
      scope: 'constant.language',
      settings: { foreground: color('syntax_primitive') },
    },
    {
      scope: [
        'constant.numeric',
        'variable.other.enummember',
        'keyword.operator.plus.exponent',
        'keyword.operator.minus.exponent',
        'meta.preprocessor.numeric',
      ],
      settings: { foreground: color('syntax_number') },
    },
    {
      scope: ['string', 'meta.embedded.assembly', 'meta.preprocessor.string'],
      settings: { foreground: color('syntax_string') },
    },
    {
      scope: 'string.regexp',
      settings: { foreground: color('syntax_regexp') },
    },
    {
      scope: [
        'punctuation.definition.group.regexp',
        'punctuation.definition.group.assertion.regexp',
        'punctuation.definition.character-class.regexp',
        'punctuation.character.set.begin.regexp',
        'punctuation.character.set.end.regexp',
        'keyword.operator.negation.regexp',
        'support.other.parenthesis.regexp',
      ],
      settings: { foreground: color('syntax_regexp-group') },
    },
    {
      scope: [
        'constant.character.character-class.regexp',
        'constant.other.character-class.set.regexp',
        'constant.other.character-class.regexp',
        'constant.character.set.regexp',
      ],
      settings: { foreground: color('syntax_regexp-chars') },
    },
    {
      scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
      settings: { foreground: color('syntax_regexp-operator') },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: { foreground: color('syntax_regexp-operator') },
    },

    // property
    {
      scope: [
        'entity.name.tag.yaml',
        'support.type.vendored.property-name',
        'support.type.property-name',
        'source.coffee.embedded',
      ],
      settings: { foreground: color('syntax_property') },
    },

    // html
    {
      name: 'brackets of XML/HTML tags',
      scope: 'punctuation.definition.tag',
      settings: { foreground: color('syntax_html-bracket') },
    },
    {
      scope: 'entity.name.tag',
      settings: { foreground: color('syntax_html-tag') },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: { foreground: color('syntax_html-attr') },
    },

    // css
    {
      scope: 'entity.name.tag.css',
      settings: { foreground: color('syntax_html-tag') },
    },
    {
      scope: 'entity.other.attribute-name.class.css',
      settings: { foreground: color('syntax_css-class') },
    },
    {
      scope: [
        'entity.other.attribute-name.pseudo-class.css',
        'entity.other.attribute-name.pseudo-element.css',
      ],
      settings: { foreground: color('syntax_css-pseudo') },
    },
    {
      scope: [
        'entity.other.attribute-name.class.mixin.css',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.parent-selector.css',
        'source.css.less entity.other.attribute-name.id',
        'entity.other.attribute-name.scss',
      ],
      settings: { foreground: color('syntax_css-keyword') },
    },
    {
      scope: [
        'support.type.property-name.css',
        'support.type.vendored.property-name.css',
      ],
      settings: { foreground: color('syntax_css-property') },
    },
    {
      scope: 'support.type.vendored.property-name.css',
      settings: { fontStyle: 'italic' },
    },
    {
      scope: ['variable.css', 'variable.scss', 'variable.other.less'],
      settings: { foreground: color('syntax_css-var') },
    },
    {
      name: 'CSS property value',
      scope: [
        'support.constant.property-value',
        'support.constant.font-name',
        'support.constant.media-type',
        'support.constant.media',
        'constant.other.color.rgb-value',
        'constant.other.rgb-value',
        'support.constant.color',
      ],
      settings: { foreground: color('syntax_primitive') },
    },

    // variables
    {
      name: 'Variables',
      scope: [
        'variable',
        'variable.other.readwrite',
        'meta.definition.variable.name',
        'support.variable',
        'entity.name.variable',
        'constant.other.placeholder',
      ],
      settings: { foreground: color('syntax_var') },
    },
    {
      name: 'Constant variables',
      scope: ['variable.other.constant', 'variable.other.enummember'],
      settings: { foreground: color('syntax_var-const') },
    },
    {
      name: 'Params',
      scope: 'variable.parameter',
      settings: { foreground: color('syntax_var-param') },
    },
    {
      name: 'Enum properties',
      scope: 'variable.other.enummember',
      settings: { foreground: color('syntax_var-property-enum') },
    },
    {
      name: 'Object properties',
      scope: [
        'meta.object-literal.key',
        'variable.object.property',
        'variable.other.object.property',
        'variable.other.property',
      ],
      settings: { foreground: color('syntax_var-property') },
    },
    {
      name: 'Object constant properties',
      scope: 'variable.other.constant.property',
      settings: { foreground: color('syntax_var-property-const') },
    },
    {
      name: 'this.self',
      scope: 'variable.language',
      settings: { foreground: color('syntax_var-this') },
    },

    // functions
    {
      name: 'Function declarations',
      scope: [
        'entity.name.function',
        'support.function',
        'support.constant.handlebars',
        'source.powershell variable.other.member',
        'entity.name.operator.custom-literal',
      ],
      settings: { foreground: color('syntax_function') },
    },
    {
      scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
      settings: { foreground: color('syntax_function') },
    },
    {
      scope: 'entity.name.function.macro',
      settings: { fontStyle: 'italic' },
    },

    // types
    {
      name: 'Types declaration and references',
      scope: [
        'support.class',
        'support.type',
        'entity.name.type',
        'entity.name.namespace',
        'entity.other.attribute',
        'entity.name.scope-resolution',
        'entity.name.class',
      ],
      settings: { foreground: color('syntax_type') },
    },
    {
      name: 'Types declaration and references, TS grammar specific',
      scope: [
        'meta.type.cast.expr',
        'meta.type.new.expr',
        'support.constant.math',
        'support.constant.dom',
        'support.constant.json',
        'entity.other.inherited-class',
      ],
      settings: { foreground: color('syntax_type') },
    },

    // keywords
    {
      scope: 'keyword',
      settings: { foreground: color('syntax_keyword') },
    },
    {
      scope: 'keyword.control',
      settings: { foreground: color('syntax_keyword') },
    },
    {
      scope: 'constant.character',
      settings: { foreground: color('syntax_keyword') },
    },
    {
      scope: 'meta.diff.header',
      settings: { foreground: color('syntax_keyword') },
    },
    {
      scope: 'storage',
      settings: { foreground: color('syntax_keyword') },
    },
    {
      scope: 'storage.type',
      settings: { foreground: color('syntax_keyword') },
    },
    {
      scope: ['storage.modifier', 'keyword.operator.noexcept'],
      settings: { foreground: color('syntax_keyword'), fontStyle: 'italic' },
    },
    {
      name: 'String interpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: { foreground: color('syntax_keyword') },
    },
    {
      scope: [
        'keyword.operator.expression',
        'keyword.operator.new',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.alignof',
        'keyword.operator.typeid',
        'keyword.operator.alignas',
        'keyword.operator.instanceof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
      ],
      settings: { foreground: color('syntax_keyword') },
    },

    // control flow
    {
      name: 'Control flow / Special keywords',
      scope: [
        'keyword.control',
        'source.cpp keyword.operator.new',
        'keyword.operator.delete',
        'keyword.other.using',
        'keyword.other.operator',
        'entity.name.operator',
      ],
      settings: { foreground: color('syntax_control') },
    },

    // other
    {
      name: 'Vue in-template components',
      scope: 'support.class.component.vue',
      settings: { foreground: color('syntax_html-component') },
    },
    {
      name: 'Semicolons',
      scope: ['punctuation.semi.rust', 'punctuation.terminator.statement.ts'],
      settings: { foreground: color('syntax_semicolon') },
    },
  ],
  semanticHighlighting: true,
  semanticTokenColors: {
    parameter: color('syntax_var-param'),
    function: color('syntax_function'),
    method: color('syntax_function-method'),
    type: color('syntax_type'),
  },
}

export default theme
